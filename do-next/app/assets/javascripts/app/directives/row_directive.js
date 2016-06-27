angular.module('app')
.directive('myCustomer', function() {
  return {
    replace: false,
    transclude: true,
    templateUrl: 'row.html'
  }
});
