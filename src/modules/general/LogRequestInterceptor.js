module.exports = /*@ngInject*/function LogRequestInterceptor($log){
  return {
    request: function(config){
      $log.info('-- request', config.method, config.url)
      return config
    }
  }
}
