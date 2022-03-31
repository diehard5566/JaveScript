// Create a function that calculates the missing value of 3 inputs using Ohm's law. 
// The inputs are v, r or i (aka: voltage, resistance and current).

// Ohm's law:

// V = R * I
// Return the missing value rounded to two decimal places.

const ohmsLaw = (v, r, i) => {
    // let missing = ""
    // if (missing === v && missing === r || missing === r && missing === i){
    //     return "Invalid"
    // }
    // else if (missing === r){
    //     missing = v / i
    //     return missing
    // }
    // else if (missing === i){
    //     missing = v / r
    //     return Number(missing.toFixed(2))
    // }
    // else if (missing === v ){
    //     missing = r * i
    //     return missing       
    // }
    // else {
    //     return "Invalid"
    // }
    if ([v, r, i].filter(x => x == '').length !== 1) //means if '' > 2 || == 0 
    return 'Invalid';

    else 
    return v === '' ? r * i : r === '' ? +(v / i).toFixed(2) : +(v / r).toFixed(2);

}


console.log(ohmsLaw(12, 220, "")); // 0.05

console.log(ohmsLaw(230, "", 2)); // 115

console.log(ohmsLaw("", 220, 0.02)); // 4.4

console.log(ohmsLaw("", "", 10)) // "Invalid"

console.log(ohmsLaw(500, 50, 10)) // "Invalid"