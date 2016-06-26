(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsController', function($rootScope, $scope, $state, $stateParams, $auth, $http) {

      // method to query the posts api and store the results in $scope
      // note: the linter will complain, but that can be fixed later:
      // // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
      // var post_query = function(){
      //   Post.query().then(function(posts){
      //     $scope.posts = posts;
      //   });
      // }
      $http.get('/api/posts').success(function(response) {
        console.log(response)
        $scope.posts = response;
      });

      $http.get('/api/activities').success(function(response) {
        console.log(response)
        $scope.activities = response;
      });

      // when the user logs in, fetch the posts
      // $rootScope.$on('auth:login-success', function(ev, user) {
      //   $scope.posts = $http.get('/api/posts.json');
      // });

      // when the user logs out, remove the posts
      // $rootScope.$on('auth:logout-success', function(ev) {
      //   $scope.posts = null;
      // });

      // will get a "401 Unauthorized" if the user is not authenticated
      // post_query();

    });

})();