// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.
// Your task is to create a function that takes a string and returns true
// if the PIN is valid and false if it's not.

const validatePIN = pin => {
    const numrex = new RegExp(/^(?=[0-9]*$)(?:.{4}|.{6})$/)
    let x = pin.match(numrex)
    if (x === null) {
        return false
    } else {
    }
    return true

    // return (/^\d{4}(\d\d)?$/).test(pin);
}
console.log(validatePIN('1234'))
// true

console.log(validatePIN('12345')) // false

console.log(validatePIN('a234')) // false

console.log(validatePIN('')) // false
