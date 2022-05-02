// For this challenge, forget how to add two numbers together.
// The best explanation on what to do for this function is this meme:

const memeSum = (a, b) => {
    let stringA = a.toString().split('')
    let stringB = b.toString().split('')

    let result = []
    if (stringA.length === stringB.length) {
        stringA = stringA.map(Number)
        stringB = stringB.map(Number)
    } else if (stringA.length > stringB.length) {
        let minus = stringA.length - stringB.length
        stringB.unshift('0'.repeat(minus))
        stringA = stringA.map(Number)
        stringB = stringB.map(Number)
    } else if (stringA.length < stringB.length) {
        let minus = stringB.length - stringA.length
        stringA.unshift('0'.repeat(minus))
        stringA = stringA.map(Number)
        stringB = stringB.map(Number)
    }

    for (let i = 0; i < stringA.length; i++) {
        result.push(stringA[i] + stringB[i])
    }
    console.log(result.join(''))

    stringA

    stringB

    // let len = Math.max(String(b).length, String(a).length)
    // a = String(a).padStart(len, '0').split('').map(Number)
    // b = String(b).padStart(len, '0').split('').map(Number)
    // let ans = ''
    // for(let i = 0; i < a.length; i++){
    //   ans += a[i] + b[i]
    // }
    // return +ans
}

memeSum(26, 39) // 515
// 2+3 = 5, 6+9 = 15
// 26 + 39 = 515

memeSum(122, 81) // 1103
// 1+0 = 1, 2+8 = 10, 2+1 = 3
// 122 + 81 = 1103

memeSum(1222, 30277) // 31499
