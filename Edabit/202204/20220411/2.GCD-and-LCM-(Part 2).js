// Create a function that takes two numbers as arguments and return the LCM of the two numbers.

const gcd = (a, b) => {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
}

const lcm = (a, b) => {
    console.log(gcd(a, b))
    return (a * b) / gcd(a, b)
}

console.log(lcm(3, 5)) // 15

console.log(lcm(14, 28)) // 28

console.log(lcm(4, 6)) // 12
