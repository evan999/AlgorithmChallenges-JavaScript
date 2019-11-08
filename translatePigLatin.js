function translatePigLatin(str) {
	
  if (str.charAt(0).match(/[aeiou]/))
  {
    str = str + "way";
  }
  else
  {
    let vowelIndex = -1;

    for(let index = 1; index < str.length; index++)
    {
      if(str.charAt(index).match(/[aeiou]/))
      {
        vowelIndex = index;
        break;
      }
    }
      str = str.substring(vowelIndex, str.length) + str.substring(0, vowelIndex) + "ay";
  }

  return str;
}

translatePigLatin("consonant");