function OtherController ($scope, post) {
  $scope.single = post.data;
  $scope.comments = post.data.kids;
}

angular
  .module('app')
  .controller('OtherController', OtherController);