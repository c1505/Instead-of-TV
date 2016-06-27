function CompleteService($http) {
  this.create = function(form_data) {
    return $http({
      method: 'POST',
      url: '/api/completes',
      data: form_data
    });
  };
  this.destroy = function(complete) {
    return $http({
      method: 'DELETE',
      url: '/api/completes/' + complete.id,
    });
  };

  this.update = function(complete) {
    return $http({
      method: 'PATCH',
      url: '/api/completes/' + complete.id,
      data: { "rating":complete.rating}
    });
  };
}
angular
  .module('app')
  .service('CompleteService', CompleteService);
