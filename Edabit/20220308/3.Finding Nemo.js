// You're given a string of words. You need to find the word "Nemo", 
// and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".


const findNemo = sentence => {
    let find =  sentence.split(' ').findIndex(n => n === "Nemo") + 1
    return find? `I found Nemo at ${find}` : `I can't find Nemo :(`
}


console.log(findNemo("I am finding Nemo !")); // "I found Nemo at 4!"

console.log(findNemo("Nemo is me")); // "I found Nemo at 1!"

console.log(findNemo("I Ne mo am")); // "I found Nemo at 2!"