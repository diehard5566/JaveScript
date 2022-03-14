// Given an int, figure out how many ones, threes and nines you could fit into the number. 
// You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.


// class OnesThreesNines {
//     constructor(n) {
//         this.ones = Math.floor(n / 1);
//         this.threes = Math.floor(n / 3);
//         this.nines = Math.floor(n / 9);
//     }
// }

// class OnesThreesNines {
//     constructor(num) {
//         this.num = num;
//     }
//     get ones() {
//         return this.num / 1
//     }
//     get threes() {
//         return Math.floor(this.num / 3)
//     }
//     get nines() {
//         return Math.floor(this.num / 9)
//     }
// }



// let n1 = new OnesThreesNines(5)
// console.log(n1.nines);  // 0

// console.log(n1.ones)// 5

// console.log(n1.threes) // 1


function getFirstInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('first data')
        }, 1000);
    })
}

function getSecondInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('second data')
        }, 2000);
    })
}

async function getGroupInfo() {
    // 代表等到第一筆資料回傳後，才印出結果和請求第二筆資料
    const firstInfo = await getFirstInfo()
    console.log(firstInfo)
    // 代表等到第二筆資料回傳後，才印出結果
    const secondInfo = await getSecondInfo()
    console.log(secondInfo)
}

getGroupInfo()