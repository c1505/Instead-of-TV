// app.run(['$rootScope', '$location', function($rootScope, $location) {
//   $rootScope.$on('auth:login-success', function() {
//     $location.path('/');
//   });
// }]);

angular
  .module('app', ['ui.router', 'templates', 'ngMessages', 'ng-token-auth'])
  .factory('Post', ['railsResourceFactory', function(railsResourceFactory) {
      return railsResourceFactory({
        url: '/api/posts',
        name: 'post'
      });
    }])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home.activities', {
        url: 'activities',
        templateUrl: 'activities.html',
        controller: "ActivitiesController as activities",
        resolve: {
          activities: function($http) {
            return $http.get('/activities');
          }
        }
      })
      // .state('home.activities', {
      //   url: 'activities',
      //   templateUrl: 'activities.html',
      //   controller: "ActivitiesController as activities",
      //   resolve: {
      //     activities: function($http) {
      //       return $http.get('api/posts.json');
      //     }
      //   }
      // })
      .state('posts', {
        url: '/posts',
        templateUrl: 'posts.html',
        controller: 'PostsController',
        controllerAs: 'posts'
      })
      .state('home.picker', {
        url: 'picker',
        templateUrl: 'picker.html',
        controller: "ActivitiesController as activities",
        resolve: {
          activities: function($http) {
            return $http.get('/activities');
          }
        }
      })
      .state('home.discover', {
        url: 'discover',
        templateUrl: 'discover.html'
      })
      .state('home.activity', {
        url: 'activities/:id',
        templateUrl: 'activity.html',
        controller: 'CompleteController as complete',
        resolve: {
          complete: function ($http, $stateParams) {
            return $http.get('/activities/' + $stateParams.id);
          }
        }
      })
      .state('home', {
        url: '/',
        templateUrl: "home.html"
      })
      .state('home.sign_in', {
        url: 'sign_in',
        templateUrl: 'user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      });
  });