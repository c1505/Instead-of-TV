function CompleteController ($scope, complete, $http, $stateParams) {
  $scope.data = complete.data.activity_complete;
  $scope.create = function(){
    $http({
      method: 'POST',
      url: '/completes',
      data: {"activity_id": $stateParams.id, "rating": $scope.rating, "note": $scope.note}
    }).success(function(data) {
      $scope.data.completes.push(data);
    })
  }
  $scope.destroy = function(complete) {
    $http({
      method: 'DELETE',
      url: '/completes/' + complete.id,
    }).success(function() {
      $scope.data.completes.splice( $scope.data.completes.indexOf(complete), 1 );
    })
  }

}

angular
  .module('app')
  .controller('CompleteController', CompleteController);

