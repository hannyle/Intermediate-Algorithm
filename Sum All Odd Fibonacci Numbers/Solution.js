function sumFibs(num) {
  var a = 0;
  var b = 1;
  //declare sum of all odd fibonacci numbers
  var sum = 1;
  while(b<num){
    b+=a;
    if(b>num){
      break;
    } 
    else{
      a=b-a;
      //check the odd number before adding to sum
      if(b%2==1){
        sum += b;
      }      
    }       
  }
  return sum;
}

sumFibs(11);
