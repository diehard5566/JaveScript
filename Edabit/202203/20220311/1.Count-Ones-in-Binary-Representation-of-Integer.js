// Count the amount of ones in the binary representation of an integer.
//  For example, since 12 is 1100 in binary, the return value should be 2.

const countOnes = i => {
    let x = i.toString(2).split('');
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "1"){
            sum += 1
        }
    }
    return sum;    
}


countOnes(0) // 0

countOnes(100) // 3

countOnes(999) // 8