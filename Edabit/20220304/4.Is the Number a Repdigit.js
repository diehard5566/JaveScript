// A repdigit is a positive number composed out of the same digit. 
// Create a function that takes an integer and returns whether it's a repdigit or not.


const isRepdigit = num => {
    if (num === 0){
        return true;
    }

    let str = num.toString();
    for (let i = 0; i < str.length; i++){
        if(str[i] === "-"){
            return false;
        }
        else if(str[i] != str[0]){
            return false;
        }
        return true
    }
}

// console.log(isRepdigit(66)) // true

console.log(isRepdigit(1001)) // false

// console.log(isRepdigit(-11)) // false