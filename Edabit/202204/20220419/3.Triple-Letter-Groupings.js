// Given a string, return a sorted array of words formed from the first three letters,
// then the next three letters, shifting by only one.

// Worked Example
// threeLetterCollection("edabit") // ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!

const threeLetterCollection = s => {
    let x = s.split('')
    let newarr = []
    for (let i = 0; i < x.length; i++) {
        let y = x.slice(i, x.length)
        if (y.length > 3) {
            y = x.slice(i, i + 3)
            newarr.push(y.join(''))
        } else if (y.length === 3) {
            newarr.push(x.slice(i, x.length).join(''))
        }
    }
    console.log(newarr.sort())

    // let arr = []
    // for (let number = 0; number <= s.length - 3; number += 1) {
    //   arr.push(s.slice(number, number + 3))
    // }
    // return arr.sort()
}

threeLetterCollection('slap') // ["lap", "sla"]

threeLetterCollection('edabit') // ["abi", "bit", "dab", "eda"]

threeLetterCollection('click') // ["cli", "ick", "lic"]

threeLetterCollection('cat') // ["cat"]

threeLetterCollection('hi') // []
