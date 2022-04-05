// Create a function that takes a number as input and returns true if the sum of its digits
// has the same parity as the entire number. Otherwise, return false.

const parityAnalysis = num => {
    let x = String(num)
        .split('')
        .map(Number)
        .reduce((a, b) => a + b)
    return (num % 2 === 0) === (x % 2 === 0)
}

parityAnalysis(243) // true
// 243 is odd and so is 9 (2 + 4 + 3)

parityAnalysis(12) // false
// 12 is even but 3 is odd (1 + 2)

parityAnalysis(3) // true
// 3 is odd and 3 is odd and 3 is odd (3)
