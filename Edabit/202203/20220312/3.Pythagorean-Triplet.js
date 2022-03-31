// Create a function that validates whether three given integers form a Pythagorean triplet. 
// The sum of the squares of the two smallest integers must equal the square of 
// the largest number to be validated.

const isTriplet = (n1, n2, n3) => {
    let x = [n1,n2,n3].sort((a, b) => a - b)

    return x[0] ** 2 + x[1] ** 2 === x[2] ** 2 ;
}

console.log(isTriplet(3, 4, 5)); // true
// 3² + 4² = 25
// 5² = 25

console.log(isTriplet(13, 5, 12)); // true
// 5² + 12² = 169
// 13² = 169

console.log(isTriplet(1, 2, 3)); // false
// 1² + 2² = 5
// 3² = 9