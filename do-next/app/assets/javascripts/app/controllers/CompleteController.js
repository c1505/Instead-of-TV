function CompleteController ($scope, complete, $stateParams, CompleteService) {
  $scope.data = complete.data.activity_complete;
  $scope.create = function(){
    var form_data = {"activity_id": $stateParams.id, "rating": $scope.rating, "note": $scope.note};
    CompleteService.create(form_data).success(function(response) {
      $scope.data.completes.push(response);
    });
  };
  $scope.destroy = function(complete) {
    CompleteService.destroy(complete).success(function() {
      $scope.data.completes.splice( $scope.data.completes.indexOf(complete), 1 );
    });
  };

  $scope.update = function(complete) {
    CompleteService.update(complete).success(function(response) {
      index = $scope.data.completes.indexOf(complete);
      $scope.data.completes[index].rating = response.rating;
      alert("Update");
      console.log(response);
    });
  };

}

angular
  .module('app')
  .controller('CompleteController', CompleteController);

