// Write a function that converts an object into an array of keys and values.


const objectToArray = obj => {
    // return Object.entries(obj);

    let result = []
    for(let i in obj){
        result.push(i, obj[i]);
    }
    return result
}


objectToArray({
  D: 1,
  B: 2,
  C: 3
}) // [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) // [["likes", 2], ["dislikes", 3], ["followers", 10]]