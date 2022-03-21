// A snail goes up the stairs. Every step, he must go up the step, then go across to the next step.
//  He wants to reach the top of the tower.

// Write a function that returns the distance the snail must travel to the top of the tower given
//  the height and length of each step and the height of the tower.



const totalDistance = (height, length, tower) => {
    let nos = +(tower / height)
    let long = length * nos
    return +(long + tower).toFixed(1)
}

totalDistance(0.2, 0.4, 100.0) // 300.0
// Total distance is 300.

totalDistance(0.3, 0.2, 25.0) // 41.7
