// Create a function that returns the nth catalan number.In combinatorial mathematics,
// the Catalan numbers form a sequence of natural numbers that occur in various counting problems,
// often involving recursively-defined objects. They are named after the Belgian mathematician Eugène Charles Catalan (1814–1894).
// For more info, check out the resource tab.

getCatalanNumber = num => {
    const factor = num => {
        if (num === 0) return 1
        return num * factor(num - 1)
    }

    let ans = factor(2 * num) / (factor(num + 1) * factor(num))
    ans
}

getCatalanNumber(0) // 1

getCatalanNumber(6) // 132

getCatalanNumber(8) // 1430
