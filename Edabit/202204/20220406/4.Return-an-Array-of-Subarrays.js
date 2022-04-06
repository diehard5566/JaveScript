// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays
// (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

const matrix = (x, y, z) => {
    let arr = Array(x).fill([])
    let a2
    let result = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        a2 = Array(y).fill(z)
        result.push(a2)
    }
    result

    // return Array(x).fill(Array(y).fill(z));
}

matrix(3, 2, 3) // [[3, 3], [3, 3], [3, 3]]

matrix(2, 1, 'edabit') // [["edabit"], ["edabit"]]

matrix(3, 2, 0) // [[0, 0], [0, 0], [0, 0]]
