// Create a function that takes a string and replaces the vowels with another character.

const replaceVowel = str => {
    const replace = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' }

    // return str.replace(/[aeiou]/g, letter => replace[letter])


    let x = str.split('')
    console.log('----');
    for (let i = 0; i < x.length; i++) {
        // console.log('ele:', i, x[i]);
        for (j in replace) {
            // console.log('ele:', j, replace[j]);
            if (x[i] === j) {
                x[i] = replace[j]
            }
        }

    } return x.join('');


}

console.log(replaceVowel("karachi"));

// "k1r1ch3"

console.log(replaceVowel("chembur"));  // "ch2mb5r"

console.log(replaceVowel("khandbari"));  // "kh1ndb1r3"