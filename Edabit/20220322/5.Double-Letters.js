// Create a function that takes a word and returns true if the word has two consecutive identical letters.

const doubleLetters = word => {
    let result = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i + 1]) {
            result.push(word[i])
        }
    } return result.length === 1

    // for (i = 0; i < word.length; i++) {
    //     if (word[i] === word[i + 1]) return true
    // }
    // return false

    //return /(\w)\1/.test(word)
}
clg


console.log(doubleLetters("loop")) // true

console.log(doubleLetters("yummy")) // true

console.log(doubleLetters("orange")) // false

console.log(doubleLetters("munchkin")) // false