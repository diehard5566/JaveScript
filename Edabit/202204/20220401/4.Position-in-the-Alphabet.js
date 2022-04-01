// Given a number between 1-26, return what letter is at that position in the alphabet.
// Return "invalid" if the number given is not within that range, or isn't an integer.

const letterAtPosition = n => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return Number.isInteger(n) && n != 0 ? alphabet[n - 1] : 'invalid'
}

console.log(letterAtPosition(1))
letterAtPosition(1) // "a"

letterAtPosition(26.0) // "z"

letterAtPosition(0) // "invalid"

letterAtPosition(4.5) // "invalid"
