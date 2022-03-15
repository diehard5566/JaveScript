// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. 
// It is possible to calculate the total resistance of a parallel circuit by using this formula:
// Create a function that takes an array of parallel resistance values, and calculates the total 
// resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5

// const parallelResistance = arr => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += 1 / arr[i]
//     }
//     return +(1 / sum).toFixed(1)
// }

const parallelResistance = arr =>
    +(1 / arr.reduce((acc, curr) => acc + (1 / curr), 0)).toFixed(1);


console.log(parallelResistance([6, 3]));// 2

console.log(parallelResistance([10, 20, 10])); // 4

console.log(parallelResistance([500, 500, 500])); // 166.6
// Round to the nearest decimal place