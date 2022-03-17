// Create a function that takes three integer arguments (a, b, c) 
// and returns the amount of integers which are of equal value.

const equal = (a, b, c) => {
    // let array = [a, b, c]
    // console.log('------');
    // for (let i = 0; i < array.length; i++) {
    //     console.log('ele: ', i, array[i]);
    //     if (array[0] === array[1] && array[1] === array[2]) {
    //         return 3
    //     } else if (array[0] != array[1] && array[1] !== array[2] && array[0] === array[2]) {
    //         return 2
    //     } else if (array[0] === array[1] && array[1] !== array[2] && array[0] !== array[2]) {
    //         return 2
    //     } else {
    //         return 0
    //     }
    // }
    const size = (new Set([a, b, c])).size;
    return size === 3 ? 0 : 4 - size;
}


console.log(equal(7, 3, 7)) // 2

console.log(equal(1, 1, 1)) // 3

console.log(equal(3, 4, 1)) // 0