var config = require('../config')
var errorLog = require('../errorLog')
var gulp = require('gulp')
  , karma = require('gulp-karma')

gulp.task('test', task)

function task() {
  return gulp.src(config.FILES.test)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', errorLog('test'))
}
