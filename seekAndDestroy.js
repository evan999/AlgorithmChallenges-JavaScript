function destroyer(arr) {
  let args = [...arguments];

  arr = arr.filter(item => {
    return !args.includes(item); 
  });

  return arr;
}