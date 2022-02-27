// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. 
// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a 
// and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus 
// on any dice roll.

// Examples

const possibleBonus = (a, b) => (a < b && b - a <= 6)


console.log(possibleBonus(3, 7)) // true

console.log(possibleBonus(1, 9)) // false

console.log(possibleBonus(5, 3)) // false