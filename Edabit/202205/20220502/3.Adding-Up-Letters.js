// Create a function addLetters that takes a list/array of letters a, and returns the "sum" of them.

// To add two letters, take their number value, add them together, and convert it back together.
//  For example, a would be 1, b would be 2, etc. So to add b and c, take 2 + 3 = 5, and then get the fifth letter of the alphabet (e).

// So then d + e + f would be 4 + 5 + 6 = 15, and the fifteenth letter is o, so that's what you return.

// Letters can also wrap. Like with y + c, that's 25 + 3 = 28, which doesn't exist.
// Consider that the 27th letter just wraps around and ends back up at a. With this logic, y + c = b.
//  Don't just do 27 = 1 though, because you could end up with a much higher sum like 70.

const addLetters = a => {
    if (a.length == 0) return 'z'

    let x = a.map(el => el.charCodeAt(0) - 96).reduce((a, b) => a + b)
    console.log(x <= 26 ? String.fromCharCode(x + 96) : String.fromCharCode((x % 26) + 96))

    x
}

addLetters(['a']) // "a"
addLetters(['a', 'b']) // "c"
addLetters(['a', 'b', 'c']) // "f"
addLetters(['a', 'b', 'c', 'd', 'e', 'f']) // "u"
addLetters(['y', 'a']) // "z"
addLetters(['y', 'c']) // "b"
addLetters(['z', 'a']) // "a"
addLetters(['x', 'y', 'z']) // "w"
addLetters([]) // "z"
