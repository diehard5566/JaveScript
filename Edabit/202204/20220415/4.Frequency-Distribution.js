// Create a function that returns the frequency distribution of an array.
// This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

const getFrequencies = arr => {
    let result = {}
    for (let el of arr) {
        console.log(result[el])
        if (result[el]) result[el] += 1
        else result[el] = 1
    }
    result
}

getFrequencies(['A', 'B', 'A', 'A', 'A']) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}
