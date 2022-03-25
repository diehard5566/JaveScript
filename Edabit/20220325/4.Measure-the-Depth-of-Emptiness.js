// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing...
// an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2,
// [[[]]] has depth 3, etc.

const measureDepth = arr => {
    console.log()
}

measureDepth([]) // 1

measureDepth([[]]) // 2

measureDepth([[[]]]) // 3

measureDepth([[[[[[[[[[[]]]]]]]]]]]) // 11
