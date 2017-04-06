angular.module('cmApp')
.controller('customerOrdersCtrl',function($scope,$stateParams,$state){
  $scope.customer = $stateParams.customer;
  this.changeState=function(state,customer){
    $state.go(state,{customer:customer,customerName:customer.name})
  }

})
