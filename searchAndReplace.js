function myReplace(str, before, after) {

  if(before[0] === before[0].toUpperCase())
  {
    str = str.replace(before, after[0].toUpperCase() + after.substring(1, after.length));
    console.log(str);
  }
  else
  {
    str = str.replace(before, after);
  }

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");