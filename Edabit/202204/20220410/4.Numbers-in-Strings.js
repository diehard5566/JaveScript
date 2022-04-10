// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them.
// If there are no strings containing numbers, return an empty array.

const numInStr = arr => {
    let s
    let result = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        s = arr[i].split('').map(Number)
        s
        for (let j = 0; j < s.length; j++) {
            console.log(s[j])
            if (!Number.isNaN(s[j]) && s[j] != 0) {
                console.log(arr[i])
                result.push(arr[i])
                break
            }
        }
    }
    result

    // newArr=[];

    // for (i=0; i<arr.length; i++){
    //     for (j=0; j<arr[i].length; j++){
    //         if(arr[i][j]>= '0' && arr[i][j] <= '9'){
    //           console.log(arr[i]);
    //             newArr.push(arr[i]);
    //             break;
    //         }
    //     }
    // }
    // return newArr;
}

// numInStr(['1a', 'a', '2b', 'b']) // ["1a", "2b"]

// numInStr(['abc', 'abc10']) // ["abc10"]

// numInStr(['abc', 'ab10c', 'a10bc', 'bcd']) // ["ab10c", "a10bc"]

numInStr(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']) // ["test1"]
