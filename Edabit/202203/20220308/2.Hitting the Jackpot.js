// Create a function that takes in an array (slot machine outcome) and 
// returns true if all elements in the array are identical, and false otherwise. 
// The array will contain 4 elements.


const testJackpot = result => result.every(x => x === result[0])

//return new Set(result).size === 1

console.log(testJackpot(["@", "@", "@", "@"])); // true

console.log(testJackpot(["abc", "abc", "abc", "abc"])); // true

console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // false

console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false