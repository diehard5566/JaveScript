// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

const asciiSort = arr => {
    let one = arr[0]
        .split('')
        .map(x => x.charCodeAt())
        .reduce((a, b) => a + b)
    let two = arr[1]
        .split('')
        .map(x => x.charCodeAt())
        .reduce((a, b) => a + b)
    console.log(one < two ? arr[0] : arr[1])
    one
    two
}

asciiSort(['hey', 'man']) // "man"
// ["h", "e", "y"] // sum([104, 101, 121]) // 326
// ["m", "a", "n"] // sum([109, 97, 110]) // 316

asciiSort(['majorly', 'then']) // "then"

asciiSort(['victory', 'careless']) // "victory"
