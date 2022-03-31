// Create a function that takes an array of names and returns an array where only 
// the first letter of each name is capitalized.


const capMe = arr => arr.map(e => e.toLowerCase()).map(e => e[0].toUpperCase() + e.slice(1))

// arr.map(x => x = x[0].toString().toUpperCase() + x.substring(1).toLowerCase());



capMe(["mavis", "senaida", "letty"]) // ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) // ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) // ["Slyvia", "Kristal", "Sharilyn", "Calista"]