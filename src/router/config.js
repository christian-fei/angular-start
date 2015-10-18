module.exports = /*@ngInject*/function($locationProvider, $stateProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/404')
  $stateProvider
    .state('example', {
      url: '/',
      controller: 'ExampleCtrl as vm',
      templateUrl: 'controllers/ExampleCtrl.html',
    })
}
