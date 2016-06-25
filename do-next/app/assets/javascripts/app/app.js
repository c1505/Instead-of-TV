angular
  .module('app', ['ui.router', 'templates'])
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
      });
  });