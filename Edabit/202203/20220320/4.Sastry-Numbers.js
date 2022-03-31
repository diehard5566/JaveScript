// In this challenge, you have to establish if a given integer n is a Sastry number. 
// If the number resulting from the concatenation of an integer n with its successor is a perfect square,
//  then n is a Sastry Number.

// Given a positive integer n, implement a function that returns true if n is a Sastry number, 
// or false if it's not.

const isSastry = number =>
    Math.sqrt(Number(String(number).split(' ') + String(number + 1).split(' '))) % 1 === 0

// Number.isInteger(Math.sqrt(Number(String(n).concat(String(n+1))))); sorter ans


console.log(isSastry(184));
// true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

isSastry(184) // false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

isSastry(106755) // true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)