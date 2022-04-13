// An array that represents a Binary Tree is in the following form:

// binaryTree = [val, arrLeft, arrRight]
// When arrLeft is the left side of the tree and arrRight is the right side of the tree.

// To illustrate:

// const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// arr1 represents the following Binary Tree:

//                     3
//                    / \
//                   8   7
//                  /\   /\
//                 5  N N  N
//                /\
//                N N

// Where N represents null.
// Create a function that takes an array that represent a Binary Tree
// and a value and return true if the value is in the tree and, false otherwise.

const valueInTree = (t, v) => {
    return t.flat(Infinity).includes(v)
}

console.log(valueInTree(arr1, 5))
// true

valueInTree(arr1, 9) // false

valueInTree(arr2, 51) // false
