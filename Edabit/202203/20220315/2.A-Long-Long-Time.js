// Create a function that takes three values:

// h hours
// m minutes
// s seconds
// Return the value that's the longest duration.

const longestTime = (h, m, s) => {
    // let hs = h * 3600
    // let ms = m * 60
    // if (hs > ms && hs > s) {
    //     return h
    // } else if (ms > hs && ms > s) {
    //     return m
    // } else {
    //     return s
    // }
    let arr = [h * 3600, m * 60, s]
    let max = Math.max(...arr)
    return [h, m, s][arr.indexOf(max)]
}


console.log(longestTime(1, 59, 3598)); // 1

console.log(longestTime(2, 300, 15000));// 300

console.log(longestTime(15, 955, 59400)); // 59400