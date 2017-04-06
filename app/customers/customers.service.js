angular.module('cmApp')
.factory('customer',function(orderFactory){
  function getRandomOrders(){
    var orders=[];
    var rand = Math.floor(Math.random()*10);

    for(var i=0;i<rand;i++){
      orders.push(new orderFactory());
    }
    return orders;
  }
  var Customer=function(name,location,gender,email){
    this.name=name;
    this.location=location;
    this.gender=gender;
    this.email=email;
    this.orders=getRandomOrders();
    this.image = gender=='male'?'images\\male.png':'images\\female.png';
  }
  return Customer;
})
.service('customerService',function(customer){
  this.customers=[];
  for(var i=0;i<45;i++){
    var name=`customer${i}`;
    var location = `location${i}`;
    var gender = i%2==0?'male':'female';
    this.customers.push(new customer(name,location,gender));
  }
  this.deleteCustomer=function(customer){
    var index= this.customers.indexOf(customer);
    this.customers.splice(index,1);
  }
  this.addCustomer=function(data){
    this.customers.push(new customer(data.name,data.location,data.gender));
  }
  this.getCustomerIndex=function(customer){
    return this.customers.indexOf(customer);
  }
  this.updateCustomer=function(data,index){
    this.customers[index]=new customer(data.name,data.location,data.gender);
  }
})
