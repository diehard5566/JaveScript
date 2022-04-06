// Write a function that returns all the elements in an array that are strictly greater
// than their adjacent left and right neighbors.

const miniPeaks = arr => {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
    //       console.log(arr[i]);
    //     }
    // }

    let x = arr.filter((x, i, a) => a[i] > a[i - 1] && a[i] > a[i + 1])
    x
}

miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) // [5, 9]
// 5 has neighbours 4 and 2, both are less than 5.

miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) // [2, 3, 5]

miniPeaks([1, 2, 3, 4, 5, 6]) // []
