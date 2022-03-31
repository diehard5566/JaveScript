// Create a function that takes two strings and returns either true or
// false depending on whether they're anagrams or not.

const isAnagram = (s1, s2) => {
    if (s1.length != s2.length) {
        return false
    }

    let lows1 = s1.toLowerCase().split(' ').join('')
    let lows2 = s2.toLowerCase().split(' ').join('')
    for (let i = 0; i < lows2.length; i++) {
        if (lows1.indexOf(lows2[i]) === -1) {
            return false
        }
    }
    return true
}

console.log(isAnagram('cristian', 'Cristina'))
// true
console.log(isAnagram('Dave Barry', 'Ray Adverb'))
//true
console.log(isAnagram('Nope', 'Note'))
// false
console.log(isAnagram('Apple', 'Appeal'))
