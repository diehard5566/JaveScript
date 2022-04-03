// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function.
// Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

const mysteryFunc = num =>
    String(num)
        .split('')
        .map(Number)
        .reduce((a, b) => a * b)

mysteryFunc(152) // 10

mysteryFunc(832) // 48

mysteryFunc(19) // 9

mysteryFunc(133) // 9
