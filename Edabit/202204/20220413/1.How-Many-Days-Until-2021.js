// Given a date, return how many days date is away from 2021 (end date not included). date will be in mm/dd/yyyy format.

const daysUntil2021 = date => {
    let t = Date.parse('1/1/2021')
    let d = Date.parse(date)
    let u = (t - d) / (1000 * 60 * 60 * 24)

    return u === 1 ? `${u} day` : `${u} days`
}

console.log(daysUntil2021('12/31/2020')) // "3 days"

console.log(daysUntil2021('1/1/2020')) // "366 days"

console.log(daysUntil2021('2/28/2020')) // "308 days"
