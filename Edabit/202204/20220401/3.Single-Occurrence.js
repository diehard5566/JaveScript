// Create a function that, given a string str, finds a letter that has a single occurrence.
//  Return the letter in uppercase. If the input is empty, return an empty string "".

const singleOccurrence = str => {
    str = str.toUpperCase()
    for (let i = 0; i < str.length; i++) {
        console.log(str.charAt(i))
        console.log(str.indexOf(str.charAt(i)))

        console.log(str.lastIndexOf(str.charAt(i)))
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            console.log(str.charAt(i))
        }
    }
}

// singleOccurrence('EFFEAABbc') // "C"

singleOccurrence('AAAAVNNNNSS') // "V"

// singleOccurrence('S') // "S"
