function CompleteService($http) {
  this.create = function(form_data) {
    return $http({
      method: 'POST',
      url: '/completes',
      data: form_data
    });
  };
  this.destroy = function(complete) {
    return $http({
      method: 'DELETE',
      url: '/completes/' + complete.id,
    });
  };
}
angular
  .module('app')
  .service('CompleteService', CompleteService);