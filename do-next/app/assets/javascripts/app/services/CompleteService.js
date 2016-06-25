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

  this.update = function(complete) {
    return $http({
      method: 'PATCH',
      url: '/completes/' + complete.id,
      data: { "rating":complete.rating}
    });
  };
}
angular
  .module('app')
  .service('CompleteService', CompleteService);
