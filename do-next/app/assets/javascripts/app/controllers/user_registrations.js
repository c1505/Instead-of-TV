angular.module('app')
  .controller('UserRegistrationsCtrl', ['$scope', '$auth', function ($scope, $auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm);
    };
  }]);