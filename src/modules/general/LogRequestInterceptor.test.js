describe('LogRequestInterceptor', function() {
  var LogRequestInterceptor,$log
  beforeEach(angular.mock.module('angular-start.modules.general'))
  beforeEach(inject(function($injector){
    LogRequestInterceptor = $injector.get('LogRequestInterceptor')
    $log = $injector.get('$log')
  }))

  var request = {
    url: '/',
    method: 'get',
    headers: {}
  }

  it('logs request', function () {
    var mockLogger = sinon.mock($log)
    mockLogger.expects('info').once().withArgs()

    LogRequestInterceptor.request(request)

    mockLogger.verify()
  })
})
