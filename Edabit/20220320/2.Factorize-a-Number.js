// Create a function that takes a number as its argument and returns an array of all its factors.

const factorize = num => {
    // let result = []
    // console.log('----');
    // for (let i = 1; i <= num; i++) {
    //     if (num % i === 0) {
    //         result.push(i)
    //     }
    // }
    // return result

    return new Array(num).fill().map((x, i) => i + 1).filter(n => num % n === 0)

}
console.log(factorize(17));

// [1, 2, 3, 4, 6, 12]

factorize(4) // [1, 2, 4]

factorize(17) // [1, 17]