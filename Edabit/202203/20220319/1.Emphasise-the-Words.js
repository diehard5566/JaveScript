// Create a function that returns a capitalized version of the string passed. 
// The first letter of each word in the string should be capitalized while 
// the rest of each word should be lowercase.


const emphasise = str => {
    return Boolean(str) ? str.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ') : str
}



console.log(emphasise("hello world"));  // "Hello World"

console.log(emphasise("GOOD MORNING")); // "Good Morning"

console.log(emphasise(""));  // ""
//