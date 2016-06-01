function HomeController ($scope, Activities) {
  $scope.rails = Activities.index();
  $scope.addItem= function() {
    $scope.data.push({
      "name":$scope.name,
       "home":$scope.home,
       "specific":$scope.specific,
       "active":$scope.active,
       "minTime":$scope.minTime,
       "maxTime":$scope.maxTime
    });
    $scope.name = '';
    $scope.home = '';
    $scope.specific = '';
    $scope.active = '';
    $scope.minTime = '';
    $scope.maxTime = '';

  };
  $scope.picked = [];
  $scope.sortField = 'minTime';
  $scope.choose = function() {
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
      if ( ($scope.data[num].minTime < $scope.time1) && ($scope.data[num].home == $scope.home1) ) {
        $scope.picked.push($scope.data[num]);
      }
    } while ( ($scope.picked.length < 3) && (count < 100 ) )
    if ($scope.picked.length == 0) {
      alert("no matches found.  try again");
    }
    $scope.time1 = "";
    $scope.home1 = "";
  }

  $scope.data = [
 {
   "name":"Baseball Game",
   "home":"away",
   "specific":"general",
   "active":"lazy",
   "minTime":180,
   "maxTime":240
 },
 {
   "name":"Netlfix",
   "home":"home",
   "specific":"general",
   "active":"lazy",
   "minTime":30,
   "maxTime":180
 },
 {
   "name":"Veep ",
   "home":"home",
   "specific":"specific",
   "active":"lazy",
   "minTime":30,
   "maxTime":30
 },
 {
   "name":"Game of thrones",
   "home":"home",
   "specific":"specific",
   "active":"lazy",
   "minTime":60,
   "maxTime":60
 },
 {
   "name":"Eno River Hike",
   "home":"away",
   "specific":"specific",
   "active":"active",
   "minTime":120,
   "maxTime":240
 },
 {
   "name":"Walk",
   "home":"home",
   "specific":"general",
   "active":"active",
   "minTime":10,
   "maxTime":60
 },
 {
   "name":"Scrabble",
   "home":"home",
   "specific":"specific",
   "active":"lazy",
   "minTime":30,
   "maxTime":90
 },
 {
   "name":"Dance off dance central",
   "home":"home",
   "specific":"specific",
   "active":"active",
   "minTime":10,
   "maxTime":60
 },
 {
   "name":"color",
   "home":"home",
   "specific":"general",
   "active":"lazy",
   "minTime":5,
   "maxTime":60
 },
 {
   "name":"cook blue apron",
   "home":"home",
   "specific":"specific",
   "active":"lazy",
   "minTime":20,
   "maxTime":90
 },
 {
   "name":"cook other",
   "home":"home",
   "specific":"general",
   "active":"lazy",
   "minTime":10,
   "maxTime":360
 },
 {
   "name":"Frisbee",
   "home":"home",
   "specific":"specific",
   "active":"active",
   "minTime":10,
   "maxTime":30
 },
 {
   "name":"Jump Rope",
   "home":"home",
   "specific":"specific",
   "active":"active",
   "minTime":10,
   "maxTime":10
 },
 {
   "name":"Bubbles",
   "home":"home",
   "specific":"specific",
   "active":"lazy",
   "minTime":5,
   "maxTime":5
 },
 {
   "name":"Indoor Climbing at TRC",
   "home":"away",
   "specific":"specific",
   "active":"active",
   "minTime":60,
   "maxTime":240
 },
  {
   "name":"Duke gardens",
   "home":"away",
   "specific":"specific",
   "active":"active",
   "minTime":60,
   "maxTime":180
 }
];
}

angular
  .module('app')
  .controller('HomeController', HomeController);