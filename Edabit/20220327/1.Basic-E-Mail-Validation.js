// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

const validateEmail = str => {
    // let valid = /\S+@\S+\.\S+/
    // let test = str.match(valid)
    // return test != null
    return str.includes('@') && str[0] !== '@' && str[str.length - 4] == '.'
}

console.log(validateEmail('@gmail.com')) // false

console.log(validateEmail('hello.gmail@com')) // false

console.log(validateEmail('gmail')) // false

console.log(validateEmail('hello@gmail')) // false

console.log(validateEmail('hello@edabit.com')) // true
