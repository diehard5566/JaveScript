// In this challenge, you are given an array and in turn, you must obtain a smaller array, following three steps:

// Split the array into two parts of equal length. If the given array has an odd length,
// then you have to eliminate the number in the middle of the array for obtaining two equal parts.
// Sum each number of the first part with each number of the reversed second part,
// obtaining a new single array having the same length of the previous two.
// Divide by two each number in the final array.
// Given an array of integers arr, implement a function that returns a new array applying the above algorithm.

const antipodesAverage = a => {
    // let l
    // let r
    // let result = []
    // if (arr.length <= 2) {
    //     result = [arr.reduce((a, b) => a + b) / 2]
    //     result
    // } else if (arr.length % 2 != 0) {
    //     l = arr.slice(0, arr.length / 2)
    //     r = arr.slice(arr.length / 2 + 1).reverse()
    //     l
    //     r
    // } else {
    //     arr
    //     l = arr.slice(0, arr.length / 2)
    //     r = arr.slice(arr.length / 2).reverse()
    //     l
    //     r
    // }
    // result = [(l[0] + r[0]) / 2, (l[1] + r[1]) / 2] <-wrong
    // result

    var r = a.slice(0, a.length / 2),
        l = a.slice(-a.length / 2).reverse()
    r
    l
    a = []
    for (var i = 0; i < r.length; i++) a.push((r[i] + l[i]) / 2)
    a
    return a
}

// antipodesAverage([1, 2, 3, 4]) // [2.5, 2.5]
// Left part = [1, 2]
// Reversed right part = [4, 3]
// Array resulting from the sum of each pair = [5, 5]
// Each number is divided by two = [2.5, 2.5]

// antipodesAverage([1, 2, 3, 4, 5]) // [3, 3]
// The length of array is odd, number 3 (in the middle) is eliminated
// Left = [1, 2]
// Reversed right = [5, 4]
// Sum = [6, 6]
// Division by two = [3, 3]

// antipodesAverage([-1, -2]) // [-1.5]
//  (-1 + -2) / 2 = [-1.5]

antipodesAverage([1, 2, 3, 5, 7, 9])
antipodesAverage([-1, -4, -12, -2, -11, -6])
antipodesAverage([-1, 0, 1])
