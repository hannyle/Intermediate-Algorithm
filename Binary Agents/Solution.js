//Simple method, use parseInt() to automatically convert from binary to decimal
function binaryAgent(str) {
  var arr = str.split(' ');
  var newArr = [];
  for(var i=0; i<arr.length; i++){
    var a = parseInt(arr[i],2);
    var newStr = String.fromCharCode(a);
    newArr.push(newStr);
  }
  return newArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
