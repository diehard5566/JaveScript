// An array is positive dominant if it contains strictly more unique positive values than unique negative values.
// Write a function that returns true if an array is positive dominant.

const isPositiveDominant = arr => {
    let x = [...new Set(arr)]
    let countp = 0
    let countn = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            countp++
        } else if (x[i] < 0) {
            countn++
        }
    }
    console.log(countp > countn)
    countp
    countn
    x

    //new Set(a.filter(x=>x>0)).size>new Set(a.filter(x=>x<0)).size
}

isPositiveDominant([1, 0, 0, -1]) // false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) // true

isPositiveDominant([5, 0]) // true

isPositiveDominant([0, -4, -1]) // false
