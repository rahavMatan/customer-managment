angular.module('cmApp')
.filter('gridFilter',function(){
  return function(customers,itemsPerRow){
    var result=[];
    for(var y=0;y<customers.length/itemsPerRow;y++){
      var row=[];
      for(var x=0;x<itemsPerRow;x++){
        if(customers[y*itemsPerRow+x])
          row.push(customers[y*itemsPerRow+x])
      }
      result.push(row);
    }
    return result;
  }
})
