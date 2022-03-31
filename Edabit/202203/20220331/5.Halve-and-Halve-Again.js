// Given two integers a and b, return how many times a can be halved while still being greater than b.

const halveCount = (a, b) => {
    let count = 0
    while (b < (a /= 2)) {
        count++
    }
    return count
}

halveCount(1324, 98) // 3
// (1324 -> 662 -> 331 -> 165.5)

halveCount(624, 8) // 6
// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

halveCount(1000, 3) // 8
// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)
