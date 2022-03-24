// Given a number, return a string of the word "Boom", which varies in the following ways:

// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5,
// return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.

const boomIntensity = n => {
    let o = 'o'
    if (n <= 1) {
        return 'boom'
    } else if (n % 2 === 0 && n % 5 === 0) {
        return `B${o.repeat(n).toLocaleUpperCase()}M!`
    } else if (n % 2 === 0) {
        return `B${o.repeat(n)}m!`
    } else if (n % 5 === 0) {
        return `B${o.repeat(n).toLocaleUpperCase()}M`
    } else {
        return `B${o.repeat(n)}m`
    }

    // if (n < 2) return 'boom';
    // const boom = 'B' + 'o'.repeat(n) + 'm' + (!(n % 2) ? '!' : '');
    // return !(n % 5) ? boom.toUpperCase() : boom;
}

console.log(boomIntensity(3))
// "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

console.log(boomIntensity(1)) // "boom"
// 1 is lower than 2, so we return "boom"

console.log(boomIntensity(5)) // "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

console.log(boomIntensity(10)) // "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
