// Given a string of numbers separated by a comma and space, return the product of the numbers.


const multiplyNums = nums => nums.split(',').map(Number).reduce((a, b) => a * b)


multiplyNums("2, 3") // 6

multiplyNums("1, 2, 3, 4") // 24

multiplyNums("54, 75, 453, 0") // 0

multiplyNums("10, -2") // -20