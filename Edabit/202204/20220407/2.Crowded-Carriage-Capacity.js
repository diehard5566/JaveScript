// A train has a maximum capacity of n passengers overall, which means each carriage's
// capacity will share an equal proportion of the maximum capacity.

// Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity.
//  If no such carriage exists, return -1.

// Worked Example
// findASeat(200, [35, 23, 18, 10, 40]) // 2

// There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
// Index 0's carriage is too full (35 is 87.5% of the maximum).
// Index 1's carriage is too full (23 is 57.5% of the maximum).
// Index 2's carriage is good enough (18 is 45% of the maximum).
// Return 2.

const findASeat = (n, arr) => {
    let m = (n / arr.length) * 0.5
    const find = e => m >= e
    let r = arr.findIndex(find)
    // for (let i = 0; i < arr.length; i++) {
    //   if(m > arr[i]){
    //     console.log(m.findIndex(i));
    //   }

    // }
    r
    m
}

findASeat(20, [3, 5, 4, 2]) // 3

findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]) // 0

findASeat(200, [35, 23, 40, 21, 38]) // -1
