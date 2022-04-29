// JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers,
// sorting them in ascending order, but using a block you can sort the iterable in different ways.

// Create a function that takes an array of integers as an argument and returns the same array in ascending order.
//  Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

const sortArray = arr => {
    let ans = []
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    //     let min = Math.min(...arr)
    //     min

    //     if (arr[i] === min) {
    //         ans.push(arr[i])
    //         console.log(arr.indexOf(arr[i]))

    //         let remove = arr.indexOf(arr[i])
    //         arr = arr.slice(0, remove).concat(arr.slice(remove + 1))
    //     }
    //     arr
    // }
    // ans
    let min
    while (arr.length > 0) {
        min = Math.min(...arr)
        ans.push(min)
        arr = arr.filter(x => x != min)
        arr
    }
    ans
}

sortArray([2, -5, 1, 4, 7, 8]) // [-5, 1, 2, 4, 7, 8]

// sortArray([23, 15, 34, 17, -28]) // [-28, 15, 17, 23, 34]

// sortArray([38, 57, 45, 18, 47, 39]) // [18, 38, 39, 45, 47, 57]
