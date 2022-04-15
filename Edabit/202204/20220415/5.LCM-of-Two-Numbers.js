// Write a function that returns the least common multiple (LCM) of two integers.

const gcd = (n1, n2) => {
    if (n2 === 0) {
        return n1
    }
    return gcd(n2, n1 % n2)
}

const lcm = (n1, n2) => {
    return (n1 * n2) / gcd(n1, n2)
}

// let lcm = (n1, n2) => {
//Find the smallest and biggest number from both the numbers
//   let lar = Math.max(n1, n2);
//   let small = Math.min(n1, n2);

//Loop till you find a number by adding the largest number which is divisble by the smallest number
//   let i = lar;
//   while(i % small !== 0){
//     i += lar;
//   }

//   //return the number
//   return i;
// }

console.log(lcm(9, 18)) // 18

console.log(lcm(8, 5)) // 40

console.log(lcm(17, 11)) // 187
