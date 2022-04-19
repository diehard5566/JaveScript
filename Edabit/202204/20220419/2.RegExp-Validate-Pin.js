// Create a RegExp myRegExp to test if a string is a valid pin or not.

// A valid pin has:

// Exactly 4 or 6 characters.
// Only numerical characters (0-9).
// No whitespace.

const myRegExp = new RegExp(/(^[0-9]{4}$|^[0-9]{6}$)/)

console.log(myRegExp.test('1234'))

// true

myRegExp.test('45135') // false

myRegExp.test('89abc1') // false

myRegExp.test('900876') // true

myRegExp.test(' 4983') // false
