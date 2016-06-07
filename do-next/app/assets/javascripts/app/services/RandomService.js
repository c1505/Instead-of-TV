function RandomService() {
  this.action = function(){
    alert("randomservice")
  }
  //   $scope.picked = [];
  //   var count = 0;
  //   var numArray = [];
  //   do {
  //     count = count + 1;
  //     do {
  //       num = Math.floor( (Math.random() * ($scope.data.length - 1)) + 0 );
  //       inArray = numArray.find(function(number){return number == this}, num)
  //     } while (inArray)
  //     numArray.push(num);
  //     if ( ($scope.data[num].min_time < $scope.time1) && ($scope.data[num].home == $scope.home1) ) {
  //       $scope.picked.push($scope.data[num]);
  //     }
  //   } while ( ($scope.picked.length < 3) && (count < 100 ) )
  //   if ($scope.picked.length == 0) {
  //     alert("no matches found.  try again");
  //   }
  //   $scope.time1 = "";
  //   $scope.home1 = "";
  // }
}

angular
  .module('app')
  .service('RandomService', RandomService);