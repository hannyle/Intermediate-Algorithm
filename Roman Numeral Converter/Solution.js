function convertToRoman(num) {
 
  var arr = ['', 'I', 'II', 'III', 'IV','V','VI','VII','VIII','IX','X'];  
 
  var convertX, convertY, convertZ, result;
  //2-digit
   function convert1(x){
     if(x[0] < 4){
      convertX = 'X'.repeat(x[0]) + arr[x[1]];
    }
     else if(x[0] == 4){
       convertX = 'XL' + arr[x[1]]; 
     }
     else if(x[0]>4 && x[0]<9){
       convertX = 'L' + 'X'.repeat(x[0] - 5) + arr[x[1]];
     }
    else {
       convertX = 'XC' + arr[x[1]];
    }
     return convertX;
   }
   
   //3-digit
   function convert2(y){
     if(y[0] <4){
       convertY= 'C'.repeat(y[0]);
     }
     else if (y[0] == 4) {
       convertY = 'CD';
     }
     else if(y[0]>4 && y[0]< 9){
       convertY = 'D' + 'C'.repeat(y[0]-5);
     }
     else {
       convertY = 'CM';
     }
     return convertY;
   }
   //4-digit
   function convert3(z){
     convertZ = 'M'.repeat(z[0]);
     return convertZ;
   }
  var numStr = num.toString();
  var len = numStr.length;
  
  if(num <=10){
    result = arr[num];
  }   
   else if(num>10 && len == 2){
     result = convert1(numStr);
   }
   else if(num>=100 && len == 3){
     var a = numStr[0];
     var b = numStr[1] + numStr[2];
     result = convert2(a) + convert1(b);
   }
   else if(num >=1000 && len == 4){
     var m = numStr[0];
     var n = numStr[1];
     var o = numStr[2] + numStr[3];
     result = convert3(m) + convert2(n) + convert1(o);   
   }
    return result;
}

convertToRoman(1004);
