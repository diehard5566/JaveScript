// An array is special if every even index contains an even number and every odd index contains an odd number. 
// Create a function that returns true if an array is special, and false otherwise.


const isSpecialArray = arr => {
    // let even = []
    // let odd = []
    // for (let i = 0; i < arr.length; i++) {
    //    if (i % 2 === 0 && arr[i] % 2 === 0 ){
    //         even.push(arr[i])
    //    }
    //    else if(i % 2 != 0 && arr[i] % 2 != 0){
    //        odd.push(arr[i])
    //    }
    // }   
    // return even.length ===  arr.length / 2 && odd.length ===  arr.length / 2     

    for (var i = 0; i < arr.length; i++)
    {
        if (i % 2 === 0 ) {
            if (arr[i] % 2 !== 0) return false; 
        }
        else
            if (arr[i] % 2 === 0) return false; 
    }

    return true


    // return arr.every((element, index) => element % 2 === index % 2);
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) );
// true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // false
// // Index 2 has an odd number 9.

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // false
// // Index 3 has an even number 8.