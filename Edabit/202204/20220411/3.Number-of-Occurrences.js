// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

const countNumberOfOccurrences = obj => {
    // let countm = 0
    // let counts = 0
    // let counti = 0
    // let x = Object.values(obj)
    // let no = {}
    // x
    // for (let i = 0; i < x.length; i++) {
    //     no = x[i]
    //     if (x[i] === 'moron') {
    //         countm++

    //     } else if (x[i] === 'scumbag') {
    //         counts++
    //     } else if (x[i] === 'idiot') {
    //         counti++
    //     }
    //     no
    // }
    // no
    // countm
    // counts
    // counti

    let newo = {}
    let x = Object.values(obj)
    x
    for (let i = 0; i < x.length; i++) {
        newo
        if (newo[x[i]]) {
            newo[x[i]]++
        } else {
            newo[x[i]] = 1
        }
        newo
    }
    newo
    return newo
}

countNumberOfOccurrences({
    a: 'moron',
    b: 'scumbag',
    c: 'moron',
    d: 'idiot',
    e: 'idiot',
})
// ➞ { moron: 2, scumbag: 1, idiot: 2 }

// countNumberOfOccurrences({
//     a: 'moron',
//     b: 'moron',
//     c: 'moron',
// })
// // ➞ { moron: 3 }

// countNumberOfOccurrences({
//     a: 'idiot',
//     b: 'scumbag',
// })
// // ➞ { idiot: 1, scumbag: 1 }
