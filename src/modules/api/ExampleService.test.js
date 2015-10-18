describe('ExampleService', function() {
  var ExampleService, $httpBackend
  beforeEach(angular.mock.module('angular-start.modules.api'))
  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend')
    ExampleService = $injector.get('ExampleService')
  }))

  it('#all', function () {
    $httpBackend.expectGET(/\/examples$/)
      .respond(200, [])

    ExampleService.all()

    $httpBackend.flush()
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  })
})
