// The Code tab has a code which attempts to add a clone of an array to itself. 
// There is no error message, but the results are not as expected. Can you fix the code?

function clone(arr) {
    arr.push([...arr])
    return arr;//[...arr, arr]
}

console.log(clone([1, 1]));
 // [1, 1, [1, 1]]

console.log(clone([1, 2, 3]));
 // [1, 2, 3, [1, 2, 3]]

console.log(clone(["x", "y"]));
 // ["x", "y", ["x", "y"]]