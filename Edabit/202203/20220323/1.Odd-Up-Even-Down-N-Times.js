// Create a function that performs an even-odd transform to an array, n times.
//  Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.

const evenOddTransform = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ===0){
            let x = arr[i] + n * -2
           arr[i] = x
        }else{
            let y = arr[i] + n * 2
            arr[i] = y
        } 
    }
    return arr
    // 	return arr.map(x=>(x%2==0)?x-2*n:x+2*n); sorter ans
}



evenOddTransform([3, 4, 9], 3) // [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

evenOddTransform([0, 0, 0], 10) // [-20, -20, -20]

evenOddTransform([1, 2, 3], 1) // [3, 0, 5]