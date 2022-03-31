// Write a method that returns array of all the numbers from 1 to an integer argument.
// But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”.
// For numbers which are multiples of both three and five use “FizzBuzz”.

const fizzBuzz = number => {
    let result = []
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            result.push('FizzBuzz')
        } else if (i % 5 === 0) {
            result.push('Buzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else {
            result.push(i)
        }

        //result.push(i % 15 == 0 ? "FizzBuzz": i % 5 == 0 ? "Buzz": i % 3 == 0 ? "Fizz" : i);
        // or
        // [...Array(n)].map((_, i) =>
        // (i + 1) % 15 === 0 ? "FizzBuzz" :
        // (i + 1) %  3 === 0 ? "Fizz" :
        // (i + 1) %  5 === 0 ? "Buzz" :
        // i + 1
    }
    return result
}

console.log(fizzBuzz(15)) // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

fizzBuzz(15) // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
