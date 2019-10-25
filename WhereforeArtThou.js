function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const entries = Object.entries(collection);
  const args = Array.from(arguments);

  let result = entries.filter(item => {
		
  })

  /*
  for (const [key, value] of entries)
  {
     
  }
  */
  



  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });