// Given an integer array, transform that array into a mirror.

const mirror = arr => {
    let r1 = arr.reverse().slice(1)
    let r2 = arr.reverse()
    return r2.concat(r1)
}

//const mirror = arr => [...arr, ...arr.reverse().slice(1)] 

console.log(mirror([0, 2, 4, 6]));


 // [0, 2, 4, 6, 4, 2, 0]

// mirror([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) // [3, 5, 6, 7, 8, 7, 6, 5, 3]