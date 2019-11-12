function pairElement(str) {
  //str = str.split('');
  //console.log(str);  
  let pairs = [];
  for(let char = 0; char < str.length; char++)
  {
    const pairElement = '';
    //let pairs = [];

      switch(str[char]) {
        case 'A':
          pairElement = 'T';
          pairs.push([str[char], pairElement]);
          console.log(pairs);
          break;
        case 'T':
          pairElement = 'A';
          pairs.push([str[char], pairElement]);
          console.log(pairs);
          break;
        case 'G':
          pairElement = 'C';
          pairs.push([str[char], pairElement]);
          console.log(pairs);
          break;
        case 'C':
          pairElement = 'G';
          pairs.push([str[char], pairElement]);
          console.log(pairs);
          break; 
      }
     
  }
  return pairs;
}
pairElement("GCG");