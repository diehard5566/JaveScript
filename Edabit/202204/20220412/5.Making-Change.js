// Create a function that takes an amount of monetary change (e.g. 47 cents) and
// breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies.
//  Your function should return an object.

// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25

const makeChange = n => {
    let change = {
        q: 0,
        d: 0,
        n: 0,
        p: 0,
    }

    while (n > 0) {
        if (n >= 25) {
            change.q++
            n -= 25
        }
        if (n < 25 && n >= 10) {
            change.d++
            n -= 10
        }
        if (n < 10 && n >= 5) {
            change.n++
            n -= 5
        }
        if (n > 0 && n < 5) {
            change.p++
            n -= 1
        }
    }
    change

    // return {
    //   'q': Math.floor(n / 25),
    //   'd': Math.floor((n % 25) / 10),
    //   'n': Math.floor(((n % 25) % 10) / 5),
    //   'p': n % 5
    // }
}

makeChange(47) // { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24) // { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92) // { "q": 3, "d": 1, "n": 1, "p": 2 }
