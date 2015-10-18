module.exports = /*@ngInject*/function camelCase(){
  return function( input ) {
    if( !input ){
      return input
    }
    return input[0].toUpperCase() + input.substr(1)
  }
}

