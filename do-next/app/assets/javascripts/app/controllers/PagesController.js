function PagesController ($scope, pages, BasicService) {
  if (pages.params) {
    $scope.page = parseInt(pages.params);
  } else {
    $scope.page = 1;
  }

  $scope.stories = $scope.stories || [];

  var place = pages.params * 30;
  BasicService.topList()
    .then(function(res) {
      var newList = res.data.slice(place, place + 30);
      newList.forEach(function(item) {
        BasicService.story(item)
        .then(function(res) {
          $scope.stories.push(res.data);
        });
      });
    });
}

angular
  .module('app')
  .controller('PagesController', PagesController);