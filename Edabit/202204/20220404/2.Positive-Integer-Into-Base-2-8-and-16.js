// Create a function that takes a positive integer number (one of base2, base8, or base16)
// and converts the integer into the given base and returns a string using recursion.

const integerToString = (number, base) => {
    let x = number.toString(base)
    x
}

integerToString(10, 2) // "1010"
// Base = 2

integerToString(1642, 8) // "3152"
// Base = 8

integerToString(212, 16) // "d4"
// Base = 16
