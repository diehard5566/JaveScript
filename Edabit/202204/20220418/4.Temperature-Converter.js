// Create a function that converts Celsius to Fahrenheit and vice versa.

const convert = deg => {
    let n = parseInt(deg.slice(0, -2))
    n
    let C
    let F
    if (deg.endsWith('C')) {
        F = String(Math.round(n * (9 / 5) + 32)) + '°F'
        F
    } else if (deg.endsWith('F')) {
        C = String(Math.round((5 / 9) * (n - 32))) + '°C'
        C
    } else {
        return 'Error'
    }
}

convert('100°F') // "212°F"

convert('19°F') // "-7°C"

console.log(convert('33')) // "Error"
