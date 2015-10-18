var config = require('../config')
var gulp = require('gulp')
  , connect = require('gulp-connect')


gulp.task('static', function(){
  return gulp.src(config.FILES.static, {base: './src'})
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
})

