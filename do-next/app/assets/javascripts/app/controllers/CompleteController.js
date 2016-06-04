function CompleteController ($scope, complete) {
  $scope.data = complete.data;
  console.log(complete.data)
}

angular
  .module('app')
  .controller('CompleteController', CompleteController);