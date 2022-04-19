// Build a function that creates histograms. Every bar needs to be on a new line
// and its length corresponds to the numbers in the array passed as an argument.
// The second argument of the function represents the character to be used for the bar.

const histogram = (arr, char) => {
    let x = []
    for (let i = 0; i < arr.length; i++) {
        x.push(char.repeat(arr[i] + '\n'))
    }
    return x.join('\n')

    //arr.map(n => char.repeat(n)).join('\n')
}

console.log(histogram([1, 3, 4], '#')) // "#\n###\n####"

// #
// ###
// ####

histogram([6, 2, 15, 3], '=') // "======\n==\n===============\n==="

// ======
// ==
// ===============
// ===

// histogram([1, 10], '+') // "+\n++++++++++"

// +
// ++++++++++
