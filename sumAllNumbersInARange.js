function sumAll(arr) {

  let sum = 0;

  const smallestNum = Math.min(...arr);
  const largestNum = Math.max(...arr);

  for (let index = smallestNum; index <= largestNum; index++)
  {
      sum += index;
  }

  return sum;  
}

sumAll([1, 4]);