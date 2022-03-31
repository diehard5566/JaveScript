// Given a two digit number, return true if that number contains one even and one odd digit.


const oneOddOneEven = n => {
    let x = String(n)
    if (x[0] === x[1]) {
        return false
    } else if (+x[0] % 2 === 0 && +x[1] % 2 != 0) {
        return true
    } else if (+x[0] % 2 !== 0 && +x[1] % 2 === 0) {
        return true
    } else {
        return false
    }
}



console.log(oneOddOneEven(15));// true

console.log(oneOddOneEven(25)); // true

console.log(oneOddOneEven(22));// false