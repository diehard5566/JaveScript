// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

const stringCycling = (a, b) => {
    if (b.length < a.length) {
        return a.slice(0, b.length - a.length)
    } else {
        return a.padEnd(b.length, a)
    }

    // if (a.length < b.length) {
    //   let i = 0;
    //   while (a.length < b.length) {
    //     a += a[i];
    //     i++;
    //   }
    // } else {
    //   a = a.slice(0, b.length);
    // }
    // return a;
}

console.log(stringCycling('abc', 'hello')) // "abcab"

console.log(stringCycling('programming', 'edabit')) // "progra"

// console.log(stringCycling('the world in me evolves in hers', 'i love Tesh, so much so')) // "the world in me evolves"

// console.log(stringCycling('a thing of beauty is a joy forever', 'indulge me surely')) // "a thing of beauty"

// console.log(stringCycling('to', 'hide')) // "toto"

console.log(stringCycling('ha', 'good morning')) // "hahahahahaha"
