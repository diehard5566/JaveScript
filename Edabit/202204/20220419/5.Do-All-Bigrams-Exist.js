// You are given an input array of bigrams, and an array of words.

// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

const canFind = (bigrams, words) => {
    // return bigrams.every(bigram => words.some(word => word.includes(bigram)))

    let count = 0
    for (var i = 0; i < bigrams.length; i++) {
        console.log(words.join(''))
        if (words.join('').includes(bigrams[i])) {
            count++
        }
    }
    console.log(bigrams.length == count)
    return bigrams.length == count
}

canFind(['at', 'be', 'th', 'au'], ['beautiful', 'the', 'hat']) // true

// canFind(['ay', 'be', 'ta', 'cu'], ['maybe', 'beta', 'abet', 'course']) // false
// # "cu" does not exist in any of the words.

// canFind(['th', 'fo', 'ma', 'or'], ['the', 'many', 'for', 'forest']) // true

// canFind(['oo', 'mi', 'ki', 'la'], ['milk', 'chocolate', 'cooks']) // false
