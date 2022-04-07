// Mubashir is trying to figure out the corresponding quadratic formula for the following quadratic sequence of numbers:

// N	Result
// 1	90
// 2	240
// 3	450
// 4	720
// 5	1050

// If you can figure this out, then help him by creating a function that takes a number n and returns the nth number of this quadratic sequence.

const guessSequence = n => {
    return n * (n + 2) * 30
}

guessSequence(1) // 90

guessSequence(2) // 240

guessSequence(3) // 450
