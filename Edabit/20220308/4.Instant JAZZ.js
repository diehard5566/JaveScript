// Create a function which concatenates the number 7 to the end of every chord in an array. 
// Ignore all chords which already end with 7.


// const jazzify = arr => arr.map(str => str.endsWith("7")? str : str + "7");
const jazzify = arr =>{   
    console.log("--------------------")
    for (let i = 0; i < arr.length; i++){
        console.log("element :", i, arr[i]);
        let index = arr[i].indexOf("7");

        if (index === -1){
            arr[i] = arr[i] + "7"
        }
    }

    return arr;
}

console.log(jazzify(["G", "F", "C"])); // ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])); // ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])); // []