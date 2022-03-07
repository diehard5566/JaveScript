//Create a function that takes an array of numbers and returns the second largest number.

const secondLargest = arr => arr.sort((a, b) => b - a)[1];//b - a的話就是大排到小

// const s = arr.sort((a, b) => a - b)
// return s[s.length - 2 ];  原本寫的 精簡成上


secondLargest([10, 40, 30, 20, 50]) // 40

secondLargest([25, 143, 89, 13, 105]) // 105

secondLargest([54, 23, 11, 17, 10]) // 23