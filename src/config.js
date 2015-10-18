module.exports = /*@ngInject*/function config($httpProvider, $logProvider, constants){
  $httpProvider.interceptors.push('LogRequestInterceptor')

  $logProvider.debugEnabled( !/(PRO)/.test(constants.APP_ENV) )
}
