angular.module('cmApp')
.component('customerOrders',{
  templateUrl:`customerOrdersComponent/customerOrders.template.html`,
  bindings:{
    orders:'<'
  },
  controller:function(){
    var self=this;
    this.$onInit=function(){
      if(self.orders){
        self.total=self.orders.reduce(function(acc,order){
          return  acc+order.total;
        },0)
      }
    }
  }

})
