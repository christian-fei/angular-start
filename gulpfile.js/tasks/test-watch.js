var config = require('../config')
var gulp = require('gulp')
  , karma = require('gulp-karma')

gulp.task('test-watch', function () {
  return gulp.src(config.FILES.test)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }))
    .on('error', function(err) {
      this.emit('end')
      throw err
    })
})
