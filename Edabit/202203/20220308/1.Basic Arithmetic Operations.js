// Write a function that does the following for the given values: 
// add, subtract, divide and multiply . This is simply referred to as the basic arithmetic operations. 
// The variables have to be defined, but in this challenge, it will be defined for you.
//  All you have to do, is to check the variables, do some string to integer conversion,
//   use some if conditions, and apply the arithmetic operation.

// The numbers and operation are given as a string and should result to an integer value.

const operation = (a, b, op) => {
    // let n1 = Number(a);
    // let n2 = Number(b);

    // opera = {
    //     "add": (x, y) => x + y,
    //     "subtract": (x, y) => x - y,
    //     "multiply": (x, y) => x * y,
    //     "divide": (x, y) => y? x / y : "undefined",
    // }
    // return opera[op](n1, n2)

    return op[0] == 'a'? +a + +b: 
    op[0] == 's'? +a - +b:
    op[0] == 'd'? b == 0? 'undefined': +a / +b:
    op[0] == 'm'? +a * +b:
    'undefined';
}



console.log(operation("1",  "2",  "add" ) );// 3

console.log(operation("4",  "5",  "subtract")); // -1

console.log(operation("6",  "0",  "divide")); // 2