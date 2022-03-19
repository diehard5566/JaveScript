// Create a function that takes a string and returns the middle character(s). 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle two characters.


const getMiddle = str => {
    let l = str.length
    if (l % 2 === 0) {
        let x = str.slice(l / 2 - 1, l / 2 + 1)
        return x
    } else {
        return str[Math.floor(l / 2)]
    }

    // var start = Math.ceil(str.length / 2) - 1;
    // var end = Math.floor(str.length / 2) + 1;
    // return str.substring(start, end);
}



console.log(getMiddle("test")); // "es"

console.log(getMiddle("testing")); // "t"

console.log(getMiddle("middle")); // "dd"

console.log(getMiddle("A")); // "A"