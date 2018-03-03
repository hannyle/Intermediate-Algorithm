function diffArray(arr1, arr2) {
  var newArr = [];
  
  var sort1= arr1.filter(function(x){
   return arr2.indexOf(x)===-1;    
  });
  
 var sort2 = arr2.filter(function(y){
   return arr1.indexOf(y)===-1;
 });  
  return sort1.concat(sort2);
 }

diffArray([1, 2, 3, 6, 6, 7], [1, 2, 3, 4, 5]);
