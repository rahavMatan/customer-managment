angular.module('cmApp',['ngAnimate','ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('customers',{
    url:'/customers',
    templateUrl:'customers/customers.template.html',
    controller:'customersCtrl',
    controllerAs:'ctrl'
  })
  .state('orders',{
    url:'/orders',
    templateUrl:'orders/orders.template.html',
    controller:'ordersCtrl',
    controllerAs:'ctrl'
  })
  .state('customerOrders',{
    url:'/customerOrders/{customerName}',
    templateUrl:'customerOrders/customersOrders.template.html',
    params:{
      customer:null
    },
    controller:'customerOrdersCtrl',
    controllerAs:'ctrl'
  })
  .state('editDetails',{
    url:'/editDetails/{customerName}',
    templateUrl:'editCustomer/editCustomer.template.html',
    params:{
      customer:null
    },
    controller:'editDetailsCtrl',
    controllerAs:'ctrl'
  })
  $urlRouterProvider.otherwise('/customers')
})
