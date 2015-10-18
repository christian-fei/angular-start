describe('example', function() {
  var $compile, $rootScope, $scope
  beforeEach(angular.mock.module('angular-start.components'))
  beforeEach(inject(function($injector){
    $compile = $injector.get('$compile')
    $rootScope = $injector.get('$rootScope')
    $scope = $rootScope.$new()
  }))

})
