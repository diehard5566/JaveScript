// Create a function which returns the word in the string, but with all the fog letters removed.
//  However, if the string is clear from fog, return "It's a clear day!".

const clearFog = str => {
    let x = str
        .toLowerCase()
        .split('')
        .filter(x => x != 'f' && x != 'o' && x != 'g')
        .join('')
    return str.includes('f' || 'g' || 'o') ? x : "It's a clear day!"
}

clearFog('sky') // "It's a clear day!"

clearFog('fogfogFFfoooofftogffreogffesGgfOogfog') // "trees"

clearFog('fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog') // "birdsandthebees"
