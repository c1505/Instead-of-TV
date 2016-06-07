function ActivitiesService($http) {
  this.index = function() {

  }
  this.show = function() {
    
  }

  this.delete = function() {
    
  }

  this.update = function() {
    
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