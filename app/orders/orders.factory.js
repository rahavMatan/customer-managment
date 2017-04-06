angular.module('cmApp')
.factory('orderFactory',function(){
  var products=[
              {name:"Basket", Price: 29.99 , Quantity:  1},
              { name : "Yarn", Price : 9.99, Quantity:  1  },
              { name : "Needles", Price : 5.99, Quantity:  1 },
              { name : "Speakers", Price :499.99, Quantity :  1 },
              { name : "iPod", Price : 399.99, Quantity:  1 },
              { name : "Table", Price : 329.99, Quantity:  1 },
              { name : "Chair", Price : 129.99, Quantity:  4 },
              { name : "Lamp", Price : 89.99, Quantity:  5 },
              { name : "Phone", Price : 599.99, Quantity:  1},
              { name : "Controller", Price : 49.99, Quantity:  1},
              { name : "Pen", Price :  0.99, Quantity:  1 },
              { name : "Lego City", Price : 49.99, Quantity:  1 },
              { name : "Baseball", Price : 9.99, Quantity:  5 },
              { name : "Glove", Price : 99.99, Quantity:  1 },
              { name : "Monitor", Price : 199.99, Quantity:  2 },
              { name : "Camera", Price : 499.99, Quantity:  1 },
              { name : "Picture Frame", Price: 19.99, Quantity:  5 }
  ];
  var Order=function(){
    var product=products[Math.floor(Math.random()*products.length)]
    this.name=product.name;
    this.date=new Date();
    this.quantity=product.Quantity;
    this.price=product.Price;
    this.total=product.Price*product.Quantity;
  }
    
  return Order;
})
