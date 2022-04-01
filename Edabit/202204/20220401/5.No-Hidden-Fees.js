// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total
// (i.e. the total is greater than the sum of prices), otherwise return false.

const hasHiddenFee = (prices, t) => {
    let x = prices.map(x => +x.slice(1)).reduce((a, b) => a + b)
    let total = +t.slice(1)
    console.log(total > x)
}

hasHiddenFee(['$15', '$40', '$19', '$50', '$22', '$41', '$35', '$10', '$38', '$41'], '$311') // false

// hasHiddenFee(['$1', '$2', '$3'], '$6') // false

// hasHiddenFee(['$1'], '$4') // true
