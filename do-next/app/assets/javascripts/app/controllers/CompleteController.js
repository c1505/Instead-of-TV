function CompleteController ($scope, complete, $http, $stateParams) {
  $scope.data = complete.data;
  $scope.create = function(){
    $http({
      method: 'POST',
      url: '/completes',
      data: {"activity_id": $stateParams.id, "rating": $scope.rating, "note": $scope.note}
    }).then(function(data) {
      $scope.data = data.data
    })
  }
}

angular
  .module('app')
  .controller('CompleteController', CompleteController);
