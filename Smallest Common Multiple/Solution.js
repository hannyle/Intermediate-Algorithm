
function smallestCommons(arr) {
  //find the min and max of given arr
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  var i;
  //create an array to store all given values and values between them, the array is stored from highest to lowest values
  var arr2 = []; 
  for(i=max;i>=min; i--){
      arr2.push(i);
  }
  
  var j=1;
  var n=1;
  var len= arr2.length;
  //Multiply the 1st array element with number from 1 onwards, check if the result is divisible by the rest of the array, one by one
   while(j<len){
    if(((arr2[0]*n) % arr2[j])!=0){
    //keep increasing "n" to find the result that satisfies the condition
      n++;
      j=1;
    } 
    else{
      j++;      
    }     
   }
  return n*arr2[0];  
  }


smallestCommons([2,5]);
