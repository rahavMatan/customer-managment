angular.module('cmApp')
.controller('editDetailsCtrl',function($scope, $stateParams,$state ,customerService){
  $scope.customer = $stateParams.customer;
  this.customerIndex= customerService.getCustomerIndex($scope.customer);
  this.updateCustomer=function(){
    customerService.updateCustomer($scope.customer,this.customerIndex);
  }
  this.changeState=function(state,customer){
    $state.go(state,{customer:customer,customerName:customer.name})
  }
  this.deleteCustomer=function(){
    customerService.deleteCustomer($scope.customer);
    $scope.customer={};
  }
})
