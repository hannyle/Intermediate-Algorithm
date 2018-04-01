function convertHTML(str) {
//array of original signs
 var arr1 = ['&','<','>','"',"'"];
 //array of equivalent HTML entities, in order
 var arr2 = ['&amp;', '&lt;','&gt;','&quot;','&apos;'];
 //convert str to array
 var strArr = str.split('');
  for(var i=0; i<str.length; i++){
   if(arr1.indexOf(str[i])!=-1){
     var j = arr1.indexOf(str[i]);
     strArr.splice(i, 1, arr2[j]);
   }  
 }
   return strArr.join('');
}

convertHTML("Dolce & Gabbana");
