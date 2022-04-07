// Write a function that returns true if an integer can be expressed as a power of base value 2 and false otherwise.

const powerOfTwo = n => {
    console.log(Number.isInteger(Math.log2(n)))
}

powerOfTwo(32) // true

powerOfTwo(1) // true

powerOfTwo(-7) // false

powerOfTwo(18) // false
