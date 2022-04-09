// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// Create a function that determines whether a number is a Disarium or not.

const isDisarium = n => {
    let x = String(n).split('').map(Number)
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        console.log(x[i] ** (i + 1))
        sum += x[i] ** (i + 1)
    }
    console.log(sum === n)

    //[...n+''].reduce((a,b,i) => a + (+b)**(i+1), 0) == n
}

isDisarium(75) // false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) // true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(518) // true

isDisarium(544) // false

isDisarium(8) // true

isDisarium(466) // false
