// An isogram is a word that has no duplicate letters. 
// Create a function that takes a string and returns either true or false depending 
// on whether or not it's an "isogram".


const isIsogram = str => str.length === new Set(str.toLowerCase()).size



console.log(isIsogram("Algorism"));
// true

console.log(isIsogram("PasSword")) // false
// Not case sensitive.

console.log(isIsogram("Consecutive")) // false