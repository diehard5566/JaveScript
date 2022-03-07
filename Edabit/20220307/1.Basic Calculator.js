// Create a function that takes two numbers and a mathematical operator + - / * and 
// will perform a calculation with the given numbers.

const calculator = (num1, operator, num2) => {
    // if(num1 === 0 || num2 === 0){
    //     return "Can't divide by 0!"
    // }
    // else if (operator === "+") {
    //     return num1 + num2;
    // }
    // else if(operator === "-"){
    //     return num1 - num2;
    // }
    // else if(operator === "*"){
    //     return num1 * num2;
    // }
    // else if(operator === "/"){
    //     return num1 / num2;
    // }

    operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => b ? a / b : "Can't divide by 0!"
    }
    return operations[operator](num1, num2);

}


console.log(calculator(2, "+", 2)); // 4

console.log(calculator(2, "*", 2)); // 4

console.log(calculator(4, "/", 2)); // 2