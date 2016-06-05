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
  $scope.destroy = function(complete) {
    $http({
      method: 'DELETE',
      url: '/completes/' + complete.id,
    }).then(function() {
      $scope.data = complete.data
    })
  }

}

angular
  .module('app')
  .controller('CompleteController', CompleteController);


  // $scope.delete = function(activity) {
  //   // should have an alert, are you shure 
  //   $http({
  //     method: 'DELETE',
  //     url: '/activities/' + activity.id
  //     // data: { "activity":item}
  //   })
  //   $scope.data = Activities.index();
  //   // this is a dumb additional request.  time to implement with $resources
  // }