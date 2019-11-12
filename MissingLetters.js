function fearNotLetter(str) {


  for(let letter = 0; letter < str.length-1; letter++)
  {
    const value = str[letter].charCodeAt();
    let missingLetterValue = 0;

    if((str[letter+1].charCodeAt() - str[letter].charCodeAt()) > 1)
    {
      missingLetterValue = value + 1;
      return String.fromCharCode(missingLetterValue);
    }
	}
	
	return undefined;  
}

fearNotLetter("abce");