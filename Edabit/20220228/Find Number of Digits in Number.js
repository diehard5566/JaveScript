// Create a function that will return an integer number corresponding to 
// the amount of digits in the given integer num.

// Examples

const num_of_digits = num => {
    let arrnum = [num]
    let strnum = Math.abs(arrnum).toString()
    console.log(strnum.length);
}

num_of_digits(-1000) // 4

num_of_digits(12) // 2

num_of_digits(1305981031) // 10

num_of_digits(0) // 1