// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

const uniqueArr = arr => {
    return arr
        .filter(function (elem, index, self) {
            return index === self.indexOf(elem)
        })
        .filter(e => e > 0)
    //  [...new Set(arr)].filter(v => v > 0);    sorter ans
}

uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) // [1, 3]

uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) // [3, 5]

uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) // [10, 6, 13, 5]
