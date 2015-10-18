var _ = require('underscore')

var constantsModule = angular.module('developers.configuration', [])

var APP_ENV = '{APP_ENV}'

if( !/(PRO|PRE|DEV)/.test(APP_ENV) ){
  APP_ENV = 'DEV'
}

var configuration = require('../configuration.json')

var constants = {}

_.each(configuration, function(value, key, list){
  if( _.isObject(value) ){
    constants[key] = value[APP_ENV]
  } else{
    constants[key] = value
  }
})

constants.APP_ENV = APP_ENV

constantsModule.constant('constants', constants)

module.exports = constantsModule.name
