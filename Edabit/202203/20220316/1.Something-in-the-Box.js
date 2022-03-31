// Create a function that returns true if an asterisk * is inside a box.


// const inBox = arr => {
//     let x = arr.some(str => str.includes('*'))
//     console.log(x);
// }
function inBox(arr) {
    console.log('----');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].slice(1, -1));
        if (arr[i].slice(1, -1).includes("*")) {
            return true;
        };
    };
    return false;
};



console.log(inBox([
    "###",
    "#*#",
    "###"
])); // true

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])); // true

console.log(inBox([
    "*####",
    "# #",
    "#  #*",
    "####"
])); // false

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])); // false