// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2)
// as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors".
// Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If p1 wins, return the string "The winner is p1".
// If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "It's a draw"
    }

    if (p1 === 'Rock') {
        if (p2 === 'Paper') {
            return 'The winner is p2'
        } else {
            return 'The winner is p1'
        }
    }

    if (p1 === 'Paper') {
        if (p2 === 'Scissors') {
            return 'The winner is p2'
        } else {
            return 'The winner is p1'
        }
    }

    if (p1 === 'Scissors') {
        if (p2 === 'Rock') {
            return 'The winner is p2'
        } else {
            return 'The winner is p1'
        }
    }

    // let w = {
    //   Rock: "Scissors",
    //   Scissors: "Paper",
    //   Paper: "Rock"
    // }
    // if (p1 === p2) return "It's a draw"
    // return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}`
}
console.log(rps('Rock', 'Paper'))

// "The winner is p2"

console.log(rps('Scissors', 'Paper')) // "The winner is p1"

console.log(rps('Paper', 'Paper')) // "It's a draw"
