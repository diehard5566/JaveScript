// Create a function that takes three arguments a, b, c and returns the sum of the numbers 
// that are evenly divided by c from the range a, b inclusive.



const evenlyDivisible = (a, b, c) => {
    console.log('----');
    // if (c > b) { return 0 };
    let sum = 0
    for (let i = a; i <= b; i++) {
        console.log(i);
        if (i % c === 0) {
            sum += i
        }
    } return sum
}



console.log(evenlyDivisible(-10, -1, 2)); // 0
// No number between 1 and 10 can be evenly divided by 20.

console.log(evenlyDivisible(1, 10, 20)) // 30
// // 2 + 4 + 6 + 8 + 10 = 30

// evenlyDivisible(1, 10, 3) // 18
// // 3 + 6 + 9 = 18