function uniteUnique(arr) {
  //new array to combine all elements from arr
  var combinedArr = [];
  var i, j;
  //using arguments object
  for(i in arguments){
    var element = arguments[i];
    for(j=0; j<element.length; j++){
      combinedArr.push(element[j]);
    }   
  }
 //using filter() to take all unique elements from combinedArr to uniqueArr
 var uniqueArr = combinedArr.filter(function(item, i, array){
    return array.indexOf(item) == i;
  });  
 return uniqueArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1]);
