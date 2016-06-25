function ActivitiesService($http) {

  this.create = function(activity) {
    return $http({
      method: 'POST',
      url: '/activities',
      data: { "activity":activity}
    });
  };

  this.delete = function(activity) {
    return $http({
      method: 'DELETE',
      url: '/activities/' + activity.id
    });
  };
  this.update = function(activity) {
    $http({
      method: 'PATCH',
      url: '/activities/' + activity.id,
      data: { "activity":activity}
    });
  };
}

angular
  .module('app')
  .service('ActivitiesService', ActivitiesService);
