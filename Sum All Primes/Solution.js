function sumPrimes(num) {
 var a,b,c; 
 function getSum(total, num) {
    return total + num;
}
 //create an array to store all numbers from 2 to num
 var arr = [];
 for(a=2; a<=num; a++){
   arr.push(a);      
 }
 //a loop through arr, remove any elements that is divisible by another elements, not the element ifself
 for(b=arr.length-1; b>=0; b--){
  for(c=0; c<arr.length; c++){
    if(arr[b]%arr[c]==0 && arr[b]!=arr[c]){
      arr.splice(b,1);      
    }
  }
 }
 //sum the arr values
  return arr.reduce(getSum);
}

sumPrimes(200);
