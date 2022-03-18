// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.


const sumTwoSmallestNums = arr => {
    let x = arr.sort((a, b) => a - b).filter(e => e > 0)
    return x[0] + x[1];
}


sumTwoSmallestNums([19, 5, 42, 2, 77]) // 7

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) // 3453455

sumTwoSmallestNums([2, 9, 6, -1]) // 8

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) // 563

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) // 4519