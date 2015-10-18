var config = require('../config')
var gulp = require('gulp')
  , concat = require('gulp-concat')

gulp.task('vendor', function(){
  return gulp.src(config.FILES.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('build'))
})
