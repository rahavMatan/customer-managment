angular.module('cmApp')
.component('listItem',{
  templateUrl:'customers\\listComponent\\list.template.html',
  bindings:{
    customer:'<'
  },
  controller:function(){
    var self=this;
    this.$onInit=function(){
      self.image = self.customer.gender=='male'?'images\\male.png':'images\\female.png';
    }
  }
})
