// Create a function that returns "even" if a number has an even number of factors and "odd" 
// if a number has an odd number of factors.


const factorGroup = num => {
    var r = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) r.push(i);
    }
    return r.length % 2 == 0 ? 'even' : 'odd';
}
console.log(factorGroup(33));

// "even"

console.log(factorGroup(36)); // "odd"

console.log(factorGroup(7)); // "even"