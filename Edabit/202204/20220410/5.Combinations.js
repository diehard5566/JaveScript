// Create a function that takes a variable number of arguments, each argument representing the number of items in a group.
// The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

const combinations = (...items) => {
    let x = items.filter(x => x != 0).reduce((a, b) => a * b)

    x
}

combinations(2, 3) // 6

combinations(3, 7, 4) // 84

combinations(2, 3, 4, 5, 0) // 120
