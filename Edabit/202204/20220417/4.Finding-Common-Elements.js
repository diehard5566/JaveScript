// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

const commonElements = (arr1, arr2) => {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {
            console.log(arr2[i])
            result.push(arr2[i])
        }
    }
    result
}

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) // [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) // [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) // [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) // []
