angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: "views/posts.html",
        controller: "TopController"
      })
      .state('pages', {
        url: '/pages/:id',
        templateUrl: 'views/posts.html',
        controller: "PagesController as pages",
        resolve: {
          pages: function(BasicService, $stateParams) {
            return {params: $stateParams.id};
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: "OtherController as post",
        resolve: {
          post: function(BasicService, $stateParams) {
            return BasicService.story($stateParams.id);
          }
        }
      });
  });