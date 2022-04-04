// Create a sorting function which sorts numbers not by numerical order,
// but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.

const numberLenSort = arr => arr.sort((a, b) => String(a).length - String(b).length)

numberLenSort([1, 54, 1, 2, 463, 2]) // [1, 1, 2, 2, 54, 463]

numberLenSort([999, 421, 22, 990, 32]) // [22, 32, 999, 421, 990]

numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) // [9, 8, 7, 6, 5, 4, 2, 1, 3, 31]
