// A number is said to be Harshad if it's exactly divisible by the sum of its digits.
// Create a function that determines whether a number is a Harshad or not.

const isHarshad = (n) => {
  let x = String(n)
    .split('')
    .map(Number)
    .reduce((a, b) => a + b)
  return n % x === 0

  //return !(n % [...String(n)].reduce((a, b) => a + +b, 0))
}

isHarshad(75) // false
// 7 + 5 = 12
// 75 is not exactly divisible by 12

isHarshad(171) // true
// 1 + 7 + 1 = 9
// 9 exactly divides 171

isHarshad(481) // true

isHarshad(89) // false

isHarshad(516) // true

isHarshad(200) // true
