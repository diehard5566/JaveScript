// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically.
// This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) // "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"

const fruitSalad = arr => {
    let newa = []
    for (let i = 0; i < arr.length; i++) {
        let half = Math.floor(arr[i].length / 2)
        let s1 = arr[i].slice(0, half)
        let s2 = arr[i].slice(half)
        newa.push(s1)
        newa.push(s2)
    }
    return newa.sort().join('')

    //return arr.flatMap(f => [f.slice(0, f.length / 2), f.slice(f.length / 2)]).sort().join("");
}

fruitSalad(['apple', 'pear', 'grapes']) // "apargrapepesple"

fruitSalad(['raspberries', 'mango']) // "erriesmangoraspb"

fruitSalad(['banana']) // "anaban"
