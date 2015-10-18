describe('camelCase', function() {
  var $filter, camelCaseFilter
  beforeEach(angular.mock.module('angular-start.filters'))
  beforeEach(inject(function($injector){
    $filter = $injector.get('$filter')
    camelCaseFilter = $filter('camelCase')
  }))

  it('leaves empty string unmodified', function () {
    var input = ''
      , expected = input
    expect( camelCaseFilter(input) ).to.eq( expected )
  })
})
