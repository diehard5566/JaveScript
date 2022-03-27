// Create a function that takes an array and returns the sum of all items in the array.

const sumArray = arr => arr.flat(2).reduce((a, b) => a + b)

sumArray([1, 2, 3]) // 6
// 1 + 2 + 3 = 6

sumArray([1, [2, [1]], 3]) // 7
// 1 + 2 + 1 + 3 = 7
