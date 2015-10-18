var gulp = require('gulp')

gulp.task('build', ['browserify', 'vendor', 'stylus', 'jade', 'static', 'test'])
