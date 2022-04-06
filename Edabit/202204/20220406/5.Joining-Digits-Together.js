// Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string.
// Separate each digit from each other with the character "-".

const joinDigits = n => {
    let result = ''
    for (let i = 1; i < n + 1; i++) {
        result += i
    }
    let x = result.split('').join('-')
    x
}

// joinDigits(4) // "1-2-3-4"

joinDigits(11) // "1-2-3-4-5-6-7-8-9-1-0-1-1"

joinDigits(15) // "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"
