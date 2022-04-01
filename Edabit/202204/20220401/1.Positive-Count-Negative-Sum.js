// Create a function that takes an array of positive and negative numbers.
// Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

const countPosSumNeg = arr => {
    if (arr.length === 0) {
        return []
    }
    let sort = arr.sort((a, b) => a - b)
    let countP = 0
    let nsum = 0
    for (let i = 0; i < sort.length; i++) {
        if (sort[i] > 0) {
            countP++
        } else {
            nsum += sort[i]
        }
    }
    return [countP, nsum]

    // if (arr.length < 1) return []
    // let countP = arr.filter(x => x >= 0).length
    // let nsum = arr.filter(x => x < 0).reduce((a, b) => a + b)
    // console.log([countP, nsum])
}

countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // [10, -65]
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.

countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) // [7, -252]

// [2, -105]
console.log(countPosSumNeg([]))
