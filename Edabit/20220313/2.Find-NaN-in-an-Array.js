// Create a function to find NaN in an array of numbers. 
// The return value should be the index where NaN is found. 
// If NaN is not found in the array, then return -1.

const findNaN = number => number.map(String).indexOf('NaN')

//const findNaN = arr => arr.findIndex(isNaN);



console.log(findNaN([1, 2, NaN])); // 2

console.log(findNaN([NaN, 1, 2, 3, 4])); // 0

console.log(findNaN([0, 1, 2, 3, 4])); // -1