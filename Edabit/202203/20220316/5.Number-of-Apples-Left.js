// A man has n number of apples. If he eats a percentage p of the apples (if apples are available), 
// his children will share the remainder of the apples.
// Create a function to determine the number of whole apples his children got. 
// If his children did not get any apples, return "The children didn't get any apples".


const getNumberOfApples = (n, p) => {
    // let percentage = parseInt(p) / 100
    // let left = Math.floor(n * percentage)
    // let chGet = n - left
    // if (chGet === 0) {
    //     return "The children didn't get any apples"
    // }
    // return chGet

    return Math.floor(n * (100 - parseInt(p)) / 100) || "The children did't get any apple";
}

getNumberOfApples(10, "90%") // 1

getNumberOfApples(25, "10%") // 22

getNumberOfApples(0, "10%") // "The children didn't get any apples"