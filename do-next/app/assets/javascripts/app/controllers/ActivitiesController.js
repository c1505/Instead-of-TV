function ActivitiesController ($scope, Activities, $http) {
  $scope.data = Activities.index();
  console.log($scope.data)
  $scope.edit = function(activity) {
    activity.editorEnabled = true;
  }
  $scope.done = function(activity) {
    activity.editorEnabled = false;
    var item = {
      // using this more than once.  maybe also pull it out
       "name":activity.name,
       "home":activity.home,
       "specific":activity.specific,
       "mental_attention":activity.mental_attention,
       "movement":activity.movement,
       "min_time":activity.min_time,
       "max_time":activity.max_time
    };
    // Activities.update(item)
    $http({
      method: 'PATCH',
      url: '/activities/' + activity.id,
      data: { "activity":item}
    })
  }
  $scope.delete = function(activity) {
    // should have an alert, are you shure 
    $http({
      method: 'DELETE',
      url: '/activities/' + activity.id
      // data: { "activity":item}
    })
    $scope.data = Activities.index();
    // this is a dumb additional request.  time to implement with $resources
  }
  $scope.addItem= function() {
    var item = {
      // using this more than once.  maybe also pull it out
       "name":$scope.name,
       "home":$scope.home,
       "specific":$scope.specific,
       "mental_attention":$scope.mental_attention,
       "movement":$scope.movement,
       "min_time":$scope.min_time,
       "max_time":$scope.max_time
    };
    Activities.create({"activity":item});
    // should add some sort of success action
    $scope.data.push(item);
    $scope.name = '';
    $scope.home = '';
    $scope.specific = '';
    $scope.mental_attention = '';
    $scope.movement = '';
    $scope.min_time = '';
    $scope.max_time = '';
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