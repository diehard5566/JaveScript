// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and
// returns true if this brick can fit into a hole with the width(w) and height(h).

const doesBrickFit = (a, b, c, w, h) => {
    if (a * b <= w * h || a * c <= w * h || b * c <= w * h) {
        return true
    } else {
        return false
    }

    //[a*b, a*c, b*c].some(el => el <= w*h)
}

console.log(doesBrickFit(1, 1, 1, 1, 1))
// true

console.log(doesBrickFit(1, 2, 1, 1, 1)) // true

console.log(doesBrickFit(1, 2, 2, 1, 1)) // false
