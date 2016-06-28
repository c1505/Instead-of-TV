
angular
  .module('app', ['ui.router', 'templates', 'ngMessages', 'ng-token-auth'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'posts.html',
        controller: 'PostsController',
        controllerAs: 'posts'
      })
      .state('posts.test', {
        url: 'test',
        template: 'i am a template'
      })
      .state('home.picker', {
        url: 'picker',
        templateUrl: 'picker.html',
        controller: "ActivitiesController",
        resolve: {
          activities: function($http) {
            return $http.get('/api/activities');
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
            return $http.get('/api/activities/' + $stateParams.id);
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
      })
      .state('home.activities', {
        url: 'activities',
        templateUrl: 'activities.html',
        controller: "ActivitiesController",
        resolve: {
          activities: function($http) {
            return $http.get('/api/activities');
          }
        }
      })
      .state('home.register', {
        url: 'register',
        templateUrl: 'user_registrations.html',
        controller: 'UserRegistrationsCtrl'
      });
  });