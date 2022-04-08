// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

function towerHanoi(discs) {
    let moves = 0

    function moveDiscs(d, src, dest, aux) {
        if (d >= 1) {
            moveDiscs(d - 1, src, aux, dest)
            moves++
            moveDiscs(d - 1, aux, dest, src)
        }
        return
    }
    moveDiscs(discs)

    return moves
}

console.log(towerHanoi(5))
// 7

towerHanoi(5) // 31

towerHanoi(0) // 0
