function whatIsInAName(collection, source) {  
  var arr = [];
  //function to get the array of Keys of an object
  function keyArr (obj){
    var objKeyArr = Object.keys(obj);
    return objKeyArr;
  }
  //get the Key array of argument 'source'
  var sourceKeyArr = keyArr(source);
  
  var collectKeyArr = [];
  var collectValueArr = []; 
  
  var match;
  
  for(var i=0; i<collection.length; i++){
    //get the Key array of argument 'collection'
     collectKeyArr = keyArr(collection[i]);    
      for(var j =0; j<sourceKeyArr.length; j++){
        //check whether the 'source' Keys exist in 'collection' Keys, and whether the property values are matched with the same Keys, 
        //here Key is 'sourceKeyArr[j]'
        //source[sourceKeyArr[j]]: get the property value of 'source' Keys[j]
        //collection[i][sourceKeyArr[j]]: get the property value of 'collection' Keys[j]
        if(collectKeyArr.indexOf(sourceKeyArr[j]) !== -1 && source[sourceKeyArr[j]] == collection[i][sourceKeyArr[j]]){        
          match = true;
        } 
        else {match = false;}        
  } 
    //if all of 'source' keys exists and match their values in 'collection', var match returns 'true'
    if(match == true){
      arr.push(collection[i]);
    }
 }   
   return arr;  
}

whatIsInAName([{ "a": 2, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
