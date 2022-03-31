// Create a function that returns only strings with unique characters.

const filterUnique = arr => {
    let x = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === new Set(arr[i]).size) {
            x.push(arr[i])
        }
    }
    return x

    // arr.filter(x => new Set(x).size == x.length); sorter ans
}

filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']) // ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(['88', '999', '989', '9988', '9898']) // []

filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']) // ["ABCDE", "BED", "BAC"]
