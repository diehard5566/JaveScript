// Create two functions:

// The first is isOdd() to check if a given number is odd using bitwise operator.
// The second is isEven() to check if a given input is even using regular expressions.
// Use of % operator is disallowed.

const isOdd = number => {
    return (number & 1) === 1 ? 'Yes' : 'No'
}

const isEven = number => {
    return /[02468]$/.test(number) ? 'Yes' : 'No'
}

console.log(isOdd(3))
// "Yes"
// Use Bitwise Operator

console.log(isOdd(58))
// "No"
// Use Bitwise Operator
console.log(isEven('0'))
// "Yes"
// Use Regular Expression

console.log(isEven('-12'))
// "No"
// Use Regular Expression
