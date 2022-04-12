// Create a function to partition an array from left to right.

const movingPartition = arr => {
    let result = []
    for (let i = 1; i < arr.length; i++) {
        console.log(arr.slice(0, i), arr.slice(i))
        result.push()
    }
    return result
}

movingPartition([-1, -1, -1, -1])
// [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

// movingPartition([1, 2, 3, 4, 5])
// [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

console.log(movingPartition([]))
// []
