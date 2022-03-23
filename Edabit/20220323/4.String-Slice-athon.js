// This challenge has five miniature exercises to help practice proficiency in string slicing.
// Check the examples below for a visual indicator of how to slice the strings. Good luck!

const s = 'abcdefghijklmnopqrstuvwxyz'

const challenge1 = (s) => {
  let x = s.slice(0, 5)
  return x
}
// "abcde"
// First 5 characters of the string.

const challenge2 = (s) => {
  let x = s.slice(-5)
  return x
} // "vwxyz"
// Last 5 characters of the string.

const challenge3 = (s) => {
  let x = s.split('').reverse().join('')
  return x
} // "zyxwvutsrqponmlkjihgfedcba"
// All characters in the string from back.

const challenge4 = (s) => {
  let x = s.split('').reverse().join('').slice(-6)
  return x
} // "fedcba"
// First 6 characters in the string (start with 6th character and go backwards).

const challenge5 = (s) => {
  let result = ''
  let x = s.slice(-7)
  for (let i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
      result += x[i]
    }
  
  return result
} // "tvxz"
// Take last 7 characters and only return odd positioned ones.

challenge1('abcdefghijklmnopqrstuvwxyz')
challenge2('abcdefghijklmnopqrstuvwxyz')

challenge3('abcdefghijklmnopqrstuvwxyz')
challenge4('abcdefghijklmnopqrstuvwxyz')
challenge5('abcdefghijklmnopqrstuvwxyz')

//sorter ans
// let challenge1 = s => s.slice(0,5);
// let challenge2 = s => s.slice(-5);
// let challenge3 = s =>[...s].reverse().join('');
// let challenge4 = s => [...s.slice(0,6)].reverse().join('');
// let challenge5 = s => [...s.slice(-8)].filter((a,b)=>b%2).join('');