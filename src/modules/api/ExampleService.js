module.exports = /*@ngInject*/function($http){
  this.all = function(){
    return $http({
      method: 'get',
      url:    '/examples'
    })
  }
}
