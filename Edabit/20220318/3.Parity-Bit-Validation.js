// Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that validates whether a binary string is valid, using parity bits.

// Worked Example
// validateBinary("10110010") ➞ true

// The last digit is the parity bit.
// 0 is the last digit.
// 0 means that there should be an even number of 1's.
// There are four 1's.
// Return true.


const validateBinary = b => {
    let last = b.slice(-1);
    let front = b.slice(0, -1);
    let count = 0;
    // console.log('---');
    for (let i = 0; i < front.length; i++) {
        // console.log('ele: ', i, front[i]);
        if (front[i] === "1") {
            count++
        }
    }

    if (count % 2 != 0 && last === "1") {
        return true
    } else if (count % 2 === 0 && last === "0") {
        return true
    } else {
        return false
    }

    //	return b.split("").filter(x=>x==="1").length%2===0  sorter ans
}

console.log(validateBinary("00101101"));

// true

console.log(validateBinary("11000000")); // true

console.log(validateBinary("11000001")); // false