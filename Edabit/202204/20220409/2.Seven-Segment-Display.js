// Create a function that takes a single Hexadecimal number as
// an argument and returns the equivalent six-digit binary number to light the display.
// Consider the six-digit binary number as an incoming input from a seput from a serial port.
// The segment display is a common cathode segment display that means you need to give a logical 1 to light up each segment.

const toDisplay = hexIn => {
    let bits = [
        [0, 0, 1, 1, 1, 1, 1, 1], //0
        [0, 0, 0, 0, 0, 1, 1, 0], //1
        [0, 1, 0, 1, 1, 0, 1, 1], //2
        [0, 1, 0, 0, 1, 1, 1, 1], //3
        [0, 1, 1, 0, 0, 1, 1, 0], //4
        [0, 1, 1, 0, 1, 1, 0, 1], //5
        [0, 1, 1, 1, 1, 1, 0, 1], //6
        [0, 0, 0, 0, 0, 1, 1, 1], //7
        [0, 1, 1, 1, 1, 1, 1, 1], //8
        [0, 1, 1, 0, 1, 1, 1, 1], //9
        [0, 1, 1, 1, 0, 1, 1, 1], //A
        [0, 1, 1, 1, 1, 1, 0, 0], //b
        [0, 0, 1, 1, 1, 0, 0, 1], //C
        [0, 1, 0, 1, 1, 1, 1, 0], //d
        [0, 1, 1, 1, 1, 0, 0, 1], //E
        [0, 1, 1, 1, 0, 0, 0, 1], //F
    ]
    console.log(parseInt(bits[hexIn].join(''), 2))
    return parseInt(bits[hexIn].join(''), 2)
}

toDisplay(0x1) // 0x06
// [dp, g, f, e, d, c, b, a] = [0, 0, 0, 0, 0, 1, 1, 0]

toDisplay(0x8) // 0x7F
// [dp, g, f, e, d, c, b, a] = [0, 1, 1, 1, 1, 1, 1, 1]

toDisplay(0x0) // 0x3F
// [dp, g, f, e, d, c, b, a] = [0, 0, 1, 1, 1, 1, 1, 1]
