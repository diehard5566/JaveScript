// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
//The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, 
//the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding 
//triangle number of the sequence.

// Examples

const triangle = n =>{
    // let count = 0;
    // for (let i = 1; i <= n; i++){
    //     count += i;        
    // }
    // return count;
    return n * (n + 1) / 2;

}
console.log(triangle(215))
 // 1

triangle(6) // 21

triangle(215) // 23220