// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology.
// The machines now interpret a series of consecutive dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance equivalent.
// There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

const danceConvert = ping => {
    const MOVES = [
        'Shimmy',
        'Shake',
        'Pirouette',
        'Slide',
        'Box Step',
        'Headspin',
        'Dosado',
        'Pop',
        'Lock',
        'Arabesque',
    ]

    let x = ping.split('').map(Number)

    if (x.includes(NaN)) {
        return 'Invalid input.'
    }

    let arr = []
    let result = []
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i] + i)
    }
    for (let i = 0; i < arr.length; i++) {
        let y = arr[i].toString().split('').pop()
        result.push(MOVES[y])
        y
    }
    return result
}

console.log(danceConvert('0000')) // ["Shimmy", "Shake", "Pirouette", "Slide"]

console.log(danceConvert('3856')) // [ "Slide", "Arabesque", "Pop", "Arabesque" ]

console.log(danceConvert('9999')) // [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

console.log(danceConvert('32a1')) // "Invalid input."
