// Create a function that finds the highest integer in the array using recursion.

const findHighest = arr => {
    if (arr.length == 1)
        return arr[0];
    if (arr[0] > arr[1])
        arr[1] = arr[0];
    arr = arr.splice(1);
    return findHighest(arr);


    // let sor = arr.sort((a, b) => a - b)
    // if (sor.length <= 1) {
    //     return sor[0]
    // } else if (sor.length <= 2) {
    //     return sor[0] > sor[1] ? sor[0] : sor[1]
    // } else {
    //     const submax = findHighest(sor.slice(1))
    //     return (sor[0] > submax) ? sor[0] : submax
    // }

    // let x = Math.max.apply(Math, arr)
    // console.log(x);


}

console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]));

// 99

console.log(findHighest([0, 12, 4, 87])); // 87

console.log(findHighest([6, 7, 8]));// 8