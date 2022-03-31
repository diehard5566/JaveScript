// Create a function that takes a number as an argument and 
// returns a string formatted to separate thousands.

const formatNum = num => num.toLocaleString()

// function formatNum(num) {
//     const nums = num.toString().split('').reverse()

//     const result = []
//     console.log('------------');
//     for (let i = 0; i < nums.length; i++) {
//         console.log('ele: ', i, nums[i]);

//         if (i % 3 === 0 && i !== 0) {
//             result.push(',')

//             result.push(nums[i])

//         } else {
//             result.push(nums[i])

//         } 
//     }

//     return result.reverse().join('')
// }


formatNum(1000) // "1,000"

formatNum(1000000) // "1,000,000"

formatNum(20) // "20"