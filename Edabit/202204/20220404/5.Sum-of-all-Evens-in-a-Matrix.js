// Create a function that returns the sum of all even elements in a 2D matrix.

const sumOfEvens = arr => {
    let x = arr.flat().filter(x => x % 2 === 0)
    let y = x.length
    return y > 0 ? x.reduce((a, b) => a + b) : 0
}

sumOfEvens([
    [1, 0, 2],
    [5, 5, 7],
    [9, 4, 3],
]) // 6

// 2 + 4 = 6

sumOfEvens([
    [1, 1],
    [1, 1],
]) // 0

sumOfEvens([
    [42, 9],
    [16, 8],
]) // 66

sumOfEvens([[], [], []]) // 0
