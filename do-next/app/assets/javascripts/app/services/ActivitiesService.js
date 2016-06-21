function ActivitiesService($http) {

  this.update = function(activity) {
    $http({
      method: 'PATCH',
      url: '/activities/' + activity.id,
      data: { "activity":activity}
    })
  }

  this.create = function(activity) {
    return $http({
      method: 'POST',
      url: '/activities',
      data: { "activity":activity}
    })
  }

  this.delete = function(activity) {
    return $http({
      method: 'DELETE',
      url: '/activities/' + activity.id
    })
  }
}

angular
  .module('app')
  .service('ActivitiesService', ActivitiesService);
