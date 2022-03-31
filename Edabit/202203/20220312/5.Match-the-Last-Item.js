// Create a function that takes an array of items and checks if the last item matches 
// the rest of the array concatenated together.

const matchLastItem = arr => {
    // let x = arr.map(element => element.toString());
    // let str = ''
    // for (let i = 0; i < x.length - 1; i++) {
    //     str += x[i];
    // }
    // return str === x[x.length - 1] ;

    return arr.pop() === arr.join('');
}


matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) // true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) // false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) // true