function HomeController ($scope) {
  $scope.data = [
    {
      "title":"first",
      "type": "Video",
      "time": 41,
      "link": "https://www.youtube.com/watch?v=6BI5RFi_A0M",
      "category": "technical",
      "tags": ""
    },
    {
      "title":"second",
      "type": "Text",
      "time": 15,
      "link": "http://www.atlasobscura.com/articles/the-delightful-perversity-of-quebecs-catholic-swears?utm_source=facebook.com&utm_medium=atlas-page",
      "category": "fluff",
      "tags": ""
    },
    {
      "title":"third",
      "type": "Video",
      "time": 10,
      "link": "https://www.youtube.com/watch?v=zKkUN-mJtPQ&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl",
      "category": "technical",
      "tags": ""

    },
    {
      "title":"POODER",
      "type": "Book",
      "time": 25,
      "link": "",
      "category": "technical",
      "tags": "tutorial"
    },
    {
      "title":"Angular JS Tutorial with rails",
      "type": "Text",
      "time": 25,
      "link": "",
      "category": "technical",
      "tags": "tutorial"
    }
  ];
  $scope.addItem= function() {
    // alert($scope.enteredItem);
    $scope.data.push({
      "title": $scope.title,
      "type": $scope.type,
      "time": $scope.time,
      "link": $scope.link,
      "category": $scope.category,
      "tags": $scope.tags
    });
    $scope.title = '';
    $scope.type = '';
    $scope.time = '';
    $scope.link = '';
    $scope.category = '';
    $scope.tags = '';

  };
}

angular
  .module('app')
  .controller('HomeController', HomeController);