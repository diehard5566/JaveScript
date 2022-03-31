// Create a function to determine if the sum of all the individual even digits are greater 
// than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".



const evenOrOdd = str => {
    let even = str.split('').map(Number).filter(e => e % 2 === 0).reduce((a, b) => a + b)
    let odd = str.split('').map(Number).filter(e => e % 2 != 0).reduce((a, b) => a + b)

    return (even > odd) ? "Even is greater than Odd"
        : (even < odd) ? "Odd is greater than Even"
            : "Even and Odd are the same"

}


console.log(evenOrOdd("22471"));
// "Even and Odd are the same"

console.log(evenOrOdd("213613")); // "Even and Odd are the same"

console.log(evenOrOdd("23456")); // "Even is greater than Odd"