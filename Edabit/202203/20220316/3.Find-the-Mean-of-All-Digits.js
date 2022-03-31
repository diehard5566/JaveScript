// Create a function that returns the mean of all digits.

const mean = num => num
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b) / num.toString().length



mean(42) // 3

mean(12345) // 3

mean(666) // 6