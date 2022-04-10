// Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.

const isFactorial = number => {
    // let result = []

    // for (let i = 1; i < n + 1; i++) {
    //     if (n % i === 0) {
    //         console.log(i)
    //         result.push(i)
    //     }
    // }

    // result
    // let ans = 1
    // for (let i = 0; i < result.length; i++) {
    //   console.log(result[i]);
    //   if(result[i] +1   ===  result[i+1]) {
    //     console.log(result[i+1])
    //     ans *= result[i+1]
    //     ans
    //   }

    // }
    // console.log(ans === n); ans

    let n = 1
    let result = 1
    while (result < number) {
        result *= n
        n += 1
        result
        n
    }
    return result === number
}

// isFactorial(2) // true
// 2 = 2 * 1 = 2!

isFactorial(72) // false

console.log(isFactorial(24)) // true
// 24 = 4 * 3 * 2 * 1 = 4!
