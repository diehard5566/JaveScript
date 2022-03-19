// Create a function that takes a number num and returns its double factorial.

const doubleFactorial = num => {
    if (num <= 1) {
        return 1
    }
    else if (num === 2) {
        return num
    } else {
        return num * doubleFactorial(num - 2)
    }

    //num < 1 ? 1 : num * doubleFactorial(num - 2); sorter ans
}

console.log(doubleFactorial(1));

// 1

console.log(doubleFactorial(2)); // 2

console.log(doubleFactorial(9)); // 945
// 9*7*5*3*1 = 945

console.log(doubleFactorial(14));// 645120
//2*4*6*8*10*12*14