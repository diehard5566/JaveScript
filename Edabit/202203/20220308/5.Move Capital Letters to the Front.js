// Create a function that moves all capital letters to the front of a word.

const capToFront = s => {
    let reUP = s.split('').filter(str => str === str.toUpperCase()).join('')
    let relo = s.split('').filter(str => str === str.toLowerCase()).join('')
    return reUP.concat(relo)
}


console.log(capToFront("hApPy")); // "APhpy"

console.log(capToFront("moveMENT")); // "MENTmove"

console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"