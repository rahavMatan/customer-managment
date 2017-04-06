angular.module('cmApp')
.controller('customersCtrl',function($scope, customerService,gridFilterFilter,$uibModal,filterFilter,$animateCss,$state){
  var self=this;
  $scope.selection="grid";
  $scope.currentPage=1;
  $scope.itemsPerPage=10;
  $scope.gridItemsPerPage=4;
  $scope.customers = customerService.customers;
  $scope.filteredCustomers = filterFilter($scope.customers,this.searchParams);
  $scope.customersGrid = gridFilterFilter($scope.customers,4);
  this.addCustomer=function(customer){
    customerService.addCustomer(customer);
    $scope.$close()
  }
  this.open = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'customers/modal/modal.template.html',
      windowTemplateUrl:'bower_components/angular-ui-bootstrap/template/modal/window.html',
      controller: 'customersCtrl',
      controllerAs: 'ctrl',
      size: 'lg',
    });
    modalInstance.result.then(function (selectedItem) {}, function () {});
  };
  this.deleteListItem=function(customer,event){
    var el = angular.element(event.path[2]);
    this.animateDelete(el,customer);
  }
  this.deleteGridItem=function(customer,event){
    var el = angular.element(event.path[1]);
    this.animateDelete(el,customer);
  }
  this.animateDelete=function(el,customer){
    $animateCss(el,{
      from:{transform:'scale(1)'},
      to:{transform:'scale(0)'},
      duration:0.3
    })
    .start()
    .then(function(){
      self.deleteCustomer(customer);
    });
  }
  this.deleteCustomer=function(customer){
    customerService.deleteCustomer(customer);
    $scope.customersGrid = gridFilterFilter($scope.customers,4);
  }
  this.search=function(){
    $scope.filteredCustomers=filterFilter($scope.customers,this.searchParams);
    $scope.customersGrid=gridFilterFilter($scope.filteredCustomers,4);
  }
  this.changeState=function(state,customer){
    $state.go(state,{customer:customer,customerName:customer.name})
  }
})
