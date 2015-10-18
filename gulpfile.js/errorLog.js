var gutil = require('gulp-util')
module.exports = function errorLog(name){
  return function(){
    gutil.log( '-- error: ', name )
    gutil.log( arguments )
    this.emit('end')
    return this
  }
}
