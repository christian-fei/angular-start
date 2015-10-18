describe('ExampleCtrl', function () {
  var $controller
  beforeEach(angular.mock.module('angular-start.controllers'))
  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller')
  }))

  describe('when controller is instanciated', function () {
    it('does nothing', function () {
      expect( 42 ).to.be.ok
    })
  })

  function createDefaultController(collaborators){
    return $controller('ExampleCtrl', collaborators)
  }
})
