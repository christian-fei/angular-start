var config = require('../config')
var gulp = require('gulp')
  , gutil = require('gulp-util')
  , gulpif = require('gulp-if')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer')
  , ngAnnotate = require('gulp-ng-annotate')
  , replace = require('gulp-replace')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect')
  , uglify = require('gulp-uglify')
  , errorLog = require('../errorLog')

gulp.task('browserify', function() {
  var browserifyStream = browserify({
        entries: config.ENTRY_FILES.js,
        insertGlobals: false,
        debug: false,
        // watchify requires these options
        cache: {}, packageCache: {}, fullPaths: false
      })
  browserifyStream.exclude('angular')
  browserifyStream.on('log', gutil.log)

  return browserifyStream.bundle()
    .on('error', errorLog('Browserify'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(config.MINIFY, ngAnnotate()))
    .pipe(gulpif(config.MINIFY, uglify()))
    .pipe(replace('{APP_ENV}', config.APP_ENV))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
})
