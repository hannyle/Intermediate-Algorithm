
function sumAll(arr) {
  var minNum = Math.min(arr[0], arr[1]);
  var maxNum = Math.max(arr[0], arr[1]);
  var newArr = [];
  var i = minNum +1 ;
  
  while(i > minNum && i < maxNum){
    newArr.push(i);
    i++;
  }
  var reducer = newArr.reduce(function(a,b){return a+b;}, 0);
  return reducer + minNum + maxNum;
 }

sumAll([4, 1]);
//result: 10
