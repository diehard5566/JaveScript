// Parity bits are used as a very simple checksum to ensure that binary data isn't 
// corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.


const addParityBit = b => {
    let s = b.split('')
    let f = s.filter(x => x === '1').length

    if (f % 2 === 0) {
        s.push('0')
        return s.join('')
    } else {
        s.push('1')
        return s.join('')
    }
}



console.log(addParityBit("1011011")); // "10110111"
// There are five 1's.
// Since five is odd, the parity bit should be a 1.
// Add the parity bit to the end of the string.
// Return the result.

console.log(addParityBit("0110000")); // "01100000"

console.log(addParityBit("0101101")); // "01011010"

console.log(addParityBit("1111111")); // "11111111"