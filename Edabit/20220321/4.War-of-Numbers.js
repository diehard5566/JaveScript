// There's a great war between the even and odd numbers. 
// Many numbers already lost their lives in this war and it's your task to end this. 
// You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, 
// then returns the difference between the sum of the even and odd numbers.


const warOfNumbers = arr => {
    let evenSum = 0;
    let oddSum = 0
    console.log('---');
    for (let i = 0; i < arr.length; i++) {
        console.log('ele: ', i, arr[i]);
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i]
        }
    }
    return Math.abs(evenSum - oddSum)

    // Math.abs(arr.reduce((a, b) => a + (b%2 ? b : -b), 0)); sorter ans

    //     const even = arr.filter(i=> i % 2 === 0).reduce((a,b)=>a+b,0)
    //     const odd = arr.filter(i=> i % 2 === 1).reduce((a,b)=>a+b,0)
    //     return odd > even ? odd - even : even - odd
}


warOfNumbers([2, 8, 7, 5]) // 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

warOfNumbers([12, 90, 75]) // 27

warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) // 168