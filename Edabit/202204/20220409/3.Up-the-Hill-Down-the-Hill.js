// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph
// then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time,
// uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph).
// No rounding is necessary.

const aveSpd = (upTime, upSpd, downSpd) => {
    let dist = (upTime * upSpd) / 60
    let totalDist = 2 * dist
    let downTime = (dist / downSpd) * 60
    let totalTime = downTime + upTime
    return (totalDist / totalTime) * 60
}

aveSpd(18, 20, 60) // 30

aveSpd(30, 10, 30) // 15

aveSpd(30, 8, 24) // 12
