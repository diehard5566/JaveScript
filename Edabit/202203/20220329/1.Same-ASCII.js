// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.

const sameAscii = (a, b) => {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i].charCodeAt()
    }
    for (let i = 0; i < b.length; i++) {
        sum2 += b[i].charCodeAt()
    }
    return sum1 === sum2

    // return (
    //     a.split('').reduce((tot, c) => tot + c.charCodeAt(0), 0) ==
    //     b.split('').reduce((tot, c) => tot + c.charCodeAt(0), 0)
    // )
}

sameAscii('a', 'a') // true

sameAscii('AA', 'B@') // true

sameAscii('EdAbIt', 'EDABIT') // false
