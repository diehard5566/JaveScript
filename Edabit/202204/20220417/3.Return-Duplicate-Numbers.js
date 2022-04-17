// Given an array nums where each integer is between 1 and 100,
// return a sorted array containing only duplicate numbers from the given nums array.

const duplicateNums = arr => {
    let narr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            narr.push(arr[i])
        }
    }

    return narr.length < 1 ? null : narr.sort((a, b) => a - b)
}

console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])) // [3]

console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])) // [72, 81, 99]

console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // null
