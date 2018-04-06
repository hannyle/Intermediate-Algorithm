//use method filter
function findElement(arr, func) {
var newArr= arr.filter(func);
  if(newArr.length >0){
    return newArr[0];
  }
  else{
    return undefined;
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
