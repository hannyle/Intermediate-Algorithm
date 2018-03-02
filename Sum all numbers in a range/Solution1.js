function sumAll(arr) {
  var sum = arguments[0][0] + arguments[0][1];
  
  var maxNum = Math.max(arguments[0][0], arguments[0][1]);
  
 var minNum = Math.min(arguments[0][0], arguments[0][1]);
  var i;
  var newArr =[];
  for(i = minNum+1; i<= maxNum; i++){
    if(i>minNum && i< maxNum) {
      newArr.push(i);
      sum +=i;      
    }    
  }
  return sum;
}

sumAll([4, 1]);
//result 10
