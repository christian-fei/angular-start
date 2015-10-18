var config = require('../config')
var gulp = require('gulp')
  , connect = require('gulp-connect')

var PORT = config.PORT

gulp.task('server', function() {
  console.log( '-- server started http://localhost:'+PORT )
  connect.server({
    root: 'build/',
    livereload: true,
    port: PORT,
    fallback: 'build/index.html'
  })
})
