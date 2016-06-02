function HomeController ($scope, Activities) {
  $scope.data = Activities.index();
  $scope.edit = function(activity) {
    activity.editorEnabled = true;
  }
  $scope.done = function(activity) {
    activity.editorEnabled = false;
  }
  $scope.addItem= function() {
    var item = {
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
  .controller('HomeController', HomeController);