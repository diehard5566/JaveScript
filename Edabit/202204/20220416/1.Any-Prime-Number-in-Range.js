// Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

const primeInRange = (n1, n2) => {
    let arr = []
    for (let i = n1; i <= n2; i++) {
        arr.push(i)
    }

    let prime = arr.some(number => {
        for (let i = 2; i < Math.sqrt(number); i++) {
            if (number % i === 0) return false
        }
        return true
    })
    return prime
}

console.log(primeInRange(10, 15)) // true
// Prime numbers in range: 11, 13

console.log(primeInRange(62, 66)) // false
// // No prime numbers in range.

console.log(primeInRange(3, 5)) // true
// Prime numbers in range: 3, 5

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        i
        if (num % i === 0) {
            return false
        }
    }
    return num > 1 //用來判斷 1, 2, 3
}

console.log(isPrime(10))
