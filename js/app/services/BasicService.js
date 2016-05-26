function BasicService($http) {
  this.topList = function() {
    return $http.get("https://hacker-news.firebaseio.com/v0/topstories.json");
  };
  this.story = function(id) {
    return $http.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json");
  };
}

angular
  .module('app')
  .service('BasicService', BasicService);

