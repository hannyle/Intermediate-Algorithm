function spinalCase(str) {
  var str2 = str.replace(/[^A-Za-z0-9-]/g, "-"); 
  var i;  
  var str2Arr = str2.split('');
  var len = str2Arr.length;
  
  for(i=1; i<len; i++){
   if(str2Arr[i].match(/[A-Z0-9]/g) && str2Arr[i-1].match(/[a-z0-9]/g)){
     str2Arr.splice(i, 0, "-");
     i++;
     len++;
    }   
  }
  return str2Arr.join('').toLowerCase();   
}

spinalCase('AllThe-small Things');
