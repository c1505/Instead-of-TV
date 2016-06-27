angular.module('app')
.directive('myCustomer', function($compile) {
  return {
    templateUrl: 'row.html'
  }
});
