// Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.

const validDivision = d => {
    let x = d.split('/').map(Number)
    return x[1] === 0 ? 'invalid' : Number.isInteger(x[0] / x[1])
}
console.log(validDivision('6/3'))
// true

validDivision('30/25') // false

validDivision('0/3') // true
