angular.module('cmApp')
.component('gridCell',{
  templateUrl:"customers\\gridComponent\\grid.template.html",
  bindings:{
    customer:'<',
    deleteCustomer:'&',
    changeState:'&'
  },
  controller:function($element){
    var self=this;
    this.$onInit=function(){
      self.element=$element;
    }
  }

})
