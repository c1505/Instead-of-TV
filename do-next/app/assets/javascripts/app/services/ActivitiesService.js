function ActivitiesService($http) {
  this.index = function() {

  }
  this.show = function() {
    
  }

  this.delete = function() {
    
  }

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


// function BasicService($http) {
//   this.topList = function() {
//     return $http.get("https://hacker-news.firebaseio.com/v0/topstories.json");
//   };
//   this.story = function(id) {
//     return $http.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json");
//   };
// }

// angular
//   .module('app')
//   .service('BasicService', BasicService);