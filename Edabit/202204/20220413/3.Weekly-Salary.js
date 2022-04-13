// Write a function that takes a list of hours and returns the total weekly salary.

// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week.
// For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

const weeklySalary = hours => {
    let workDay = hours.slice(0, -2)
    let weekend = hours.slice(5)
    let x = workDay.reduce((a, b) => a + (b > 8 ? (b - 8) * 15 + 8 * 10 : b * 10), 0)
    let y = weekend.reduce((a, b) => a + (b > 8 ? (b - 8) * 30 + 8 * 20 : b * 20), 0)
    workDay
    weekend
    x
    y
    console.log(x + y)

    // const weekdayPay = hours
    //     .slice(0, 5)
    //     .reduce((total, num) => total + (num > 8 ? (num - 8) * 15 + 8 * 10 : num * 10), 0)
    // const weekendPay = hours.slice(5).reduce((total, num) => total + (num > 8 ? (num - 8) * 30 + 8 * 20 : num * 20), 0)

    // return weekdayPay + weekendPay
}

weeklySalary([8, 8, 8, 8, 8, 0, 0]) // 400

weeklySalary([10, 10, 10, 0, 8, 0, 0]) // 410

weeklySalary([0, 0, 0, 0, 0, 12, 0]) // 280
