// Mubashir needs your help to find out Increasing and Decreasing numbers for a given range.

// Increasing Numbers
// Numbers whose digits, when read from left to right, are never less than the previous digit. See below some examples of increasing numbers:

// 1111
// 123456
// 125788999
// Decreasing Numbers
// Numbers whose digits, when read from left to right, are never greater than the previous digit. See below some examples of decreasing numbers:

// 1111
// 654321
// 999887521
// Create a function that takes a number n and returns total occurrences of all the increasing or decreasing numbers in the range 1 - 10^n.

const incDec = n => {
    let x = []
    //inc
    for (let i = 1; i <= 10 ** n; i++) {
        let sn = String(i).split('').map(Number)
        let count = 0
        console.log(sn.length)
        for (let j = 0; j < sn.length; j++) {
            if (sn[j] <= sn[j + 1]) {
                count++
            }
            if (sn[j] > sn[j + 1]) {
                break
            }
            if (count === sn.length - 1) {
                x.push(i)
            }
        }
    }
    //dec
    for (let i = 1; i <= 10 ** n; i++) {
        let sn = String(i).split('').map(Number)
        let count = 0
        for (let j = 0; j < sn.length; j++) {
            if (sn[j] >= sn[j + 1]) {
                count++
            }
            if (sn[j] < sn[j + 1]) {
                break
            }
            if (count === sn.length - 1) {
                x.push(i)
            }
        }
    }

    console.log(Array.from(new Set(x)).length)
    x
}

// incDec(0) // 1
// 10^0 = 1
// 1 is both increasing and decreasing.

// incDec(1) // 10
// 10^1 = 10
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] are both increasing and decreasing numbers.

incDec(3) // 475
