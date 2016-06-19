function ActivitiesController ($scope, $http, activities, ActivitiesService, RandomService) {
  
  $scope.data = activities.data
  $scope.edit = function(activity) {
    activity.editorEnabled = true;
  }
  $scope.update = function(activity) {
    activity.editorEnabled = false;
    ActivitiesService.update(activity)
    // $http({
    //   method: 'PATCH',
    //   url: '/activities/' + activity.id,
    //   data: { "activity":activity}
    // })
  }
  $scope.delete = function(activity) {
    ActivitiesService.delete(activity).success(function(){
      $scope.data.splice( $scope.data.indexOf(activity), 1);
    })
  }

  $scope.create= function() {
    ActivitiesService.create($scope.new).success(function(data){
      $scope.data.push(data)
      $scope.new = '';
    })
  };

  $scope.picked = [];
  $scope.sortField = 'min_time';

  $scope.choose = function() {
    // this is long and should be pulled out into a service or separate controller
    $scope.picked = [];
    var count = 0;
    var numArray = [];
    do {
      count = count + 1;
      do {
        num = Math.floor( (Math.random() * ($scope.data.length - 1)) + 0 );
        inArray = numArray.find(function(number){return number == this}, num)
      } while (inArray)
      numArray.push(num);
      if ( ($scope.data[num].min_time < $scope.time1) && ($scope.data[num].home == $scope.home1) ) {
        $scope.picked.push($scope.data[num]);
      }
    } while ( ($scope.picked.length < 3) && (count < 100 ) )
    if ($scope.picked.length == 0) {
      alert("no matches found.  try again");
    }
    $scope.time1 = "";
    $scope.home1 = "";
  }
}

angular
  .module('app')
  .controller('ActivitiesController', ActivitiesController);