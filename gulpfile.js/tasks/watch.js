var config = require('../config')
var gulp = require('gulp')

gulp.task('watch', ['server', 'build'], function(){
  gulp.watch(config.FILES.js, ['browserify','test'])
  gulp.watch(config.FILES.static, ['static'])
  gulp.watch(config.FILES.jade, ['jade'])
  gulp.watch(config.FILES.stylus, ['stylus'])
})
