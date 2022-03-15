// You are given an array of integers having both negative and positive values, 
// except for one integer which can be negative or positive. Create a function to find out that integer.

const lonelyInteger = arr => {
    // let x = [...new Set(arr)].reduce((a, b) => a + b);
    // let x = arr.find(b => !arr.includes(-b));
    console.log('-----');
    for (let i of arr) {
        console.log(-i)
        if (!arr.includes(-i)) {
            return i
        }
    }
}


lonelyInteger([1, -1, 2, -2, 3]) // 3
// 3 has no matching negative appearance.

lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) // -4
// -4 has no matching positive appearance.

lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) // -9