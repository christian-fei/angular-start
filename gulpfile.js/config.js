require('shelljs/global')
var PORT = process.env.PORT || 9000
var APP_ENV = process.env.APP_ENV || 'PRE'
var MINIFY = process.env.MINIFY
var BUILD = exec('git rev-parse HEAD').output.toString().substring(0,10) || Date.now()

if( MINIFY === undefined ){
  MINIFY = ['PRO', 'PRE'].indexOf(APP_ENV) >= 0
}

console.log( '----------------------------' )
console.log( '-- PORT', PORT )
console.log( '-- APP_ENV', APP_ENV )
console.log( '-- MINIFY', MINIFY )
console.log( '-- BUILD', BUILD )
console.log( '----------------------------' )

module.exports = {
  PORT: PORT,
  APP_ENV: APP_ENV,
  MINIFY: MINIFY,
  BUILD: BUILD,
  FILES: {
    js: 'src/**/*.js',
    static: ['src/assets/lang/*', 'src/assets/**/*', 'src/partials/**/*.html'],
    test: 'src/**/*.test.js',
    stylus: 'src/**/*.styl',
    jade: ['src/**/*.jade'],
    doc: ['src/assets/doc/**/*.jade'],
    vendor: [
      'node_modules/angular/angular.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/angular-ui-router/build/angular-ui-router.min.js',
      'node_modules/angular-ui-bootstrap/ui-bootstrap.min.js',
      'node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.min.js',
    ],
  },
  ENTRY_FILES: {
    js: 'src/index.js',
    stylus: 'src/index.styl',
  }
}
