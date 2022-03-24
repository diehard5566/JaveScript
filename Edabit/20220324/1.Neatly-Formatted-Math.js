// Given a simple math expression as a string, neatly format it as an equation.

const formatMath = s => {
    let x = s.split(' ')
    let num1 = +x[0]
    let num2 = +x[x.length - 1]
    let result
    if (x[1] === '+') {
        result = num1 + num2
    } else if (x[1] === '-') {
        result = num1 - num2
    } else if (x[1] === 'x') {
        result = num1 * num2
    } else if (x[1] === '/') {
        result = num1 / num2
    }
    return `${num1} ${x[1]} ${num2} = ${result}`

    //`${expr} = ${eval(expr.replace(/x/,'*'))}`;
}

formatMath('3 + 4') // "3 + 4 = 7"

formatMath('3 - 2') // "3 - 2 = 1"

formatMath('4 x 5') // "4 x 5 = 20"

formatMath('6 / 3') // "6 / 3 = 2"
