// Create a function which validates whether a 3 character string is a vowel sandwich.
//  In order to have a valid sandwich, the string must satisfy the following rules:

// The first and last characters must be a consonant.
// The character in the middle must be a vowel.

const isVowelSandwich = str => {
    // if (str.length > 3) {
    //     return false
    // } else if (str[0].match(/[aeiou]/g) === 1 && str[2].match(/[aeiou]/g) === 1) {
    //     return false
    // }
    // else if (str.match(/[aeiou]/g)) {
    //     return true
    // } return false

    if (str.length != 3) return false
    let vowels = 'aeiou'
    return !vowels.includes(str[0]) && vowels.includes(str[1]) && !vowels.includes(str[2])

}

///^[^aeiou][aeiou][^aeiou]$/.test(str);

console.log(isVowelSandwich("cit"));
// true

console.log(isVowelSandwich("ear"));  // false

console.log(isVowelSandwich("lea"));  // false

console.log(isVowelSandwich("try"));  // false

