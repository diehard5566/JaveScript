// Return the smallest number of steps it takes to convert a string entirely into uppercase
// or entirely into lower case, whichever takes the fewest number of steps.
//  A step consists of changing one character from lower to upper case, or vice versa.

const stepsToConvert = str => {
    let x = str.split('')
    let countlow = 0
    let countup = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === x[i].toLowerCase()) {
            console.log(x[i])
            countlow++
        } else {
            console.log(x[i])
            countup++
        }
    }
    return countlow > countup ? countup : countlow

    const upper = [...string].filter(char => char === char.toUpperCase())
    const lower = [...string].filter(char => char === char.toLowerCase())
    return Math.min(upper.length, lower.length)
}

stepsToConvert('abC') // 1
// "abC" converted to "abc" in 1 step

stepsToConvert('abCBA') // 2
// "abCBA" converted to "ABCBA" in 2 steps

stepsToConvert('aba') // 0

stepsToConvert('abaCCC') // 3
