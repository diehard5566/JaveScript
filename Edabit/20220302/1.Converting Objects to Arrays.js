// Write a function that converts an object into an array,
// where each element represents a key-value pair in the form of an array.

// Examples

const toArray = obj => {
    // let arr = []
    // for (let i in obj){
    //     arr.push([i, obj[i]]);        
    // }
    // return arr;
    return Object.entries(obj)
}


console.log(toArray({ a: 1, b: 2 })) // [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) // [["shrimp", 15], ["tots", 12]]

toArray({}) // []

