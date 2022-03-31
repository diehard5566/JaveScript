// A repdigit is a positive number composed out of the same digit. 
// Create a function that takes an integer and returns whether it's a repdigit or not.


const isRepdigit = num => {
    // if (num === 0){
    //     return true;
    // }
    // let str = num.toString();
    // let split = str.split("")
    // let letter = split[0]
    // for (let i = 0; i < split.length; i++){
    //     if(split[i] !== letter) return false;   
    // }
    // return true;

    // // function isMatch (ele){
    // //     return ele === split[0];
    // // }

    // // return split.every(isMatch);


    return new Set(String(num)).size === 1;
}

console.log(isRepdigit(6)) // true

console.log(isRepdigit(1001)) // false

console.log(isRepdigit(-11)) // false