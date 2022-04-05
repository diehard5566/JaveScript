// Consider the following operation on an arbitrary positive integer:

// If n is even -> n / 2
// If n is odd -> n * 3 + 1
// Create a function to repeatedly evaluate these operations, until reaching 1. Return the number of steps it took.

// See the following example, using 10 as the input, with 6 steps:

// 10 is even - 10 / 2 = 5
// 5 is odd - 5 * 3 + 1 = 16
// 16 is even - 16 / 2 = 8
// 8 is even - 8 / 2 = 4
// 4 is even - 4 / 2 = 2

const collatz = num => {
    let count = 0
    while (num > 1) {
        if (num % 2 === 0) {
            num = num / 2
            count++
        } else {
            num = num * 3 + 1
            count++
        }
    }
    return count
}
console.log(collatz(2))
// 1

console.log(collatz(3)) // 7

console.log(collatz(10)) // 6
