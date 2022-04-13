// Create a function which counts how many lone 1s appear in a given number.
// Lone means the number doesn't appear twice or more in a row.

const countLoneOnes = n => {
    let x = String(n)
        .split('')
        .filter((e, i, x) => e == '1' && x[i - 1] != '1' && x[i + 1] != '1').length

    x
}

countLoneOnes(101) // 2

countLoneOnes(1191) // 1

countLoneOnes(1111) // 0

countLoneOnes(462) // 0
