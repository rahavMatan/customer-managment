angular.module('cmApp')
.controller('ordersCtrl',function($scope,customerService){
  $scope.customers = customerService.customers;
  $scope.currentPage=1;
  $scope.itemsPerPage=3;

})
