// Create a function that takes a string and returns the first character that repeats.
//  If there is no repeat of a character, return "-1".

const firstRepeat = chars => {
    let result = []
    let x = chars.split('')
    for (let i = 0; i < x.length; i++) {
        console.log(x.indexOf(x[i]) != x.lastIndexOf(x[i]))
        if (x.indexOf(x[i]) != x.lastIndexOf(x[i])) {
            console.log(x[i])
            result.push(x[i])
        } else {
            console.log('-1')
        }
    }

    x
    result
    let ans = [...new Set([...result])][0]
    ans
    console.log(result.length === 0 ? '-1' : ans)
}

firstRepeat('legolas') // "l"

firstRepeat('Gandalf') // "a"

firstRepeat('Balrog') // "-1"

firstRepeat('Isildur') // "-1"
// Case sensitive "I" not equal to "i"
