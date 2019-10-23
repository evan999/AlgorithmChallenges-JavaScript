function diffArray(arr1, arr2) {
	let newArr = [];
	
	newArr = arr1.filter(item => {
    return !arr2.includes(item); 
  });
	
  return newArr;
}