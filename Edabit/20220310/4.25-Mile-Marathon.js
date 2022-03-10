// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, 
// she notices the sign-up sheet doesn't directly state the marathon's length.
//  Instead, the marathon's length is listed in small, different portions. 
//  Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.


const marathonDistance = d => {
    // if (d.length === 0){
    //     return false
    // }
    // else {
    //     let sum25 = d.reduce((a, b) => Math.abs(a) + Math.abs(b))
    //     if (sum25 === 25){
    //     return true
    // }
    // return false
    // }
    return d.reduce((a, b) => a + Math.abs(b), 0) == 25
    

}

console.log(marathonDistance([1, 2, 3, 4])); // false

console.log(marathonDistance([1, 9, 5, 8, 2])); // true

console.log(marathonDistance([])); // true 