angular.module('app')
  .controller('UserSessionsCtrl',function ($scope, $http) {
    $http.get('/api/activities').success(function(response) {
        console.log(response)
        $scope.activities = response;
      });
  });