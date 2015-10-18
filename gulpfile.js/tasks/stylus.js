var config = require('../config')
var errorLog = require('../errorLog')
var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , autoprefixer = require('gulp-autoprefixer')
  , plumber = require('gulp-plumber')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect')

gulp.task('stylus', function(){
  return gulp.src(config.ENTRY_FILES.stylus)
    .on('error', errorLog('stylus'))
    .pipe(stylus({
      use: [nib()],
      'include css': true,
    }))
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
    }))
    .pipe(plumber())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload())
})

