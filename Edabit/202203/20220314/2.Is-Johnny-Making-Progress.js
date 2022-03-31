// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. 
// He wants to track how often the number of miles he runs this Saturday
//  exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's 
// total number of progress days.


const progressDays = runs => {
    // let sum = 0
    // for (let i = 0; i < runs.length; i++) {
    //     if (runs[i + 1] > runs[i]) {
    //         sum += 1
    //     }
    // }
    // return sum
    return runs.filter((run, i) => runs[i + 1] > run).length; //runs.filter((e,i,a)=>e<a[i+1]).length;

}

console.log();
progressDays([3, 4, 1, 2]) // 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) // 3

progressDays([6, 5, 4, 3, 2, 9]) // 1

progressDays([9, 9])  // 0