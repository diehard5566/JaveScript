// Create a function that always returns true for every item in a given array.
// However, if an element is the word "flick", switch to always returning the opposite boolean value.

const flickSwitch = arr => {
    let result = []
    let Switch = true
    for (i of arr) {
        if (i === 'flick') {
            Switch = !Switch
            result.push(Switch)
        } else {
            result.push(Switch)
        }
    }
    return result

    // let b = true;
    // return arr.map(x => x === 'flick' ? b = !b : b);
}

console.log(flickSwitch(['edabit', 'flick', 'eda', 'bit'])) // [true, false, false, false]

// console.log(flickSwitch(["flick", 11037, 3.14, 53])) // [false, false, false, false]

console.log(flickSwitch([false, false, 'flick', 'sheep', 'flick'])) // [true, true, false, false, true]
