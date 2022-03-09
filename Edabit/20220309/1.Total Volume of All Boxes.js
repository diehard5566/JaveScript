// Given an array of boxes, create a function that returns the total volume of all those boxes combined together
// . A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) 
// should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.


const totalVolume = (...boxes) => {
    let sum = 0
    for (let i = 0; i < boxes.length; i++){
        sum += boxes[i].reduce((a, b) => a * b);         
    }
    return sum    
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // 63

// totalVolume([2, 2, 2], [2, 1, 1]) // 10

// totalVolume([1, 1, 1]) // 1