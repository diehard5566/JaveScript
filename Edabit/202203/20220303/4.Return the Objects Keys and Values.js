// Create a function that takes an object and returns the keys and values as separate arrays. 
// Return the keys sorted alphabetically, and their corresponding values in the same order.


// const keysAndValues = obj => {
//     let arr0 = [];
//     let arr1 = [];
//     // let result = [];
//     for (let i in obj){
//         arr0.push(i);
//         arr1.push(obj[i])
//     }
//     // result.push(arr0);
//     // result.push(arr1);
//     return [arr0, arr1];

    
// };

const keysAndValues = obj=> [ Object.keys(obj), Object.values(obj)]

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
// [["key1", "key2", "key3"], [true, false, undefined]]