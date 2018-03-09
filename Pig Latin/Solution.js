function translatePigLatin(str) {
  var vowels = ['a', 'o', 'u', 'e', 'i', 'y'];
  var i;
  var cutStr, consonantStr, newStr;
  for(i = 0; i<str.length; i++){
    if(vowels.indexOf(str[i]) !== -1){
      cutStr = str.substr(i);
      consonantStr = str.substr(0,i);
      break;
    }
  }
  
  if(cutStr.length == str.length){
    newStr = cutStr.concat("way");
  } else {
    newStr = cutStr.concat(consonantStr + 'ay');
  }
  return newStr;
}

translatePigLatin("california");
