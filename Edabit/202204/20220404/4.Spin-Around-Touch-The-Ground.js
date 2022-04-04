// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made.
//  Note that each word in the array counts as a 90° rotation in that direction.

const spinAround = r => {
    let x
    let count = 0
    let count2 = 0

    if (r.length === 0) {
        return 0
    }

    for (let i = 0; i < r.length; i++) {
        if (r[i] === 'right') {
            count++
            r[i] = 90
            x = r[i]
        } else {
            count2++
            r[i] = -90
            x = r[i]
        }
    }
    return Math.floor(Math.abs(x * count - x * count2) / 360)

    //Math.abs(Math.round(r.reduce((a, b) => a + (b == 'right' ? 1 : -1), 0)
}

// spinAround(['right', 'right', 'right', 'right', 'left', 'right']) // 1
// // # You spun right 4 times (90 * 4 = 360)
// // # You spun left once (360 - 90 = 270)
// // # But you spun right once more to make a full rotation (270 + 90 = 360)

// spinAround(['left', 'right', 'left', 'right']) // 0

// spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']) // 2

// 1
console.log(spinAround([]))
