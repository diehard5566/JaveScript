// Create a function that converts a string of letters to their respective number in the alphabet.

const alphNum = str => {
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.push(str[i].charCodeAt() - 65)
    }
    return result.join(' ')
}

alphNum('XYZ') // "23 24 25"

alphNum('ABCDEF') // "0 1 2 3 4 5"

alphNum('JAVASCRIPT') // "9 0 21 0 18 2 17 8 15 19"
