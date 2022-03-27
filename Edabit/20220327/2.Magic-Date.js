// You are to read each part of the date into its own integer type variable. The year should be a 4 digit number.
// You can assume the user enters a correct date formatted d m yyyy (no error checking required).

// Determine whether the entered date is a magic date. Here are the rules for a magic date:

// mm * dd is a 1-digit number that matches the last digit of yyyy or
// mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
// mm * dd is a 3-digit number that matches the last 3 digits of yyyy
// The program should then display true if the date is magic, or false if it is not.

const Magic = str => {
    let x = str.split(' ')
    let m = String(x[0] * x[1])
    let check = String(x[2].slice(2))
    if (m < 10) {
        check = String(x[2].slice(3))
        return m === check
    } else {
        return m === check
    }
    // const [day, month, year] = str.split(' ').map(Number);

    // return String(year).endsWith(day * month)
}

console.log(Magic('1 1 2011'))
// true

console.log(Magic('4 1 2001')) // false

console.log(Magic('5 2 2010')) // true

console.log(Magic('9 2 2011')) // false
