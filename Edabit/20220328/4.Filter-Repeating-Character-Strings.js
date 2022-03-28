// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

const identicalFilter = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i].split('').every(char => char === arr[i][0])
        if (s) {
            result.push(arr[i])
        }
    }
    return result

    // let newArr = []
    // for (i = 0; i < arr.length; i++) {
    // 	if (new Set(arr[i]).size == 1) {
    // 		 newArr.push(arr[i])
    // 		 }
    // }
    // return newArr

    // return arr.filter((str) => new Set(str).size === 1) sorter ans
}

identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz'])
// ["aaaaaa", "d", "eeee"]

// identicalFilter(['88', '999', '22', '545', '133'])
// ["88", "999", "22"]

// identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])
// []
