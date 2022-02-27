// Create a function that takes a string str and performs simple encoding 
// as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples

function simpleEncoder(str) {
	// let tolow = str.toLowerCase();
    // let toarr = tolow.split("");
    // let result = []
    // for (i = 0; i < toarr.length; i++){
        
    //     if(toarr.indexOf(toarr[i]) == toarr.lastIndexOf(toarr[i])){
    //         // means single char
    //         result.push("[")
    //     } else { 
    //         // means same char
    //         result.push("]")
    //     }

    // }
    
    //return result.join("")  

    return str
    .toLowerCase()
    .split("")
    .map(function (word, index, array){
        return array.indexOf(word) == array.lastIndexOf(word)? "[" : "]"
    })
    .join("");
}







console.log(simpleEncoder("Mubashir")) // "[[[[[[[["
// '[' for each character

console.log(simpleEncoder("Mattt")) // "[[]]]"
// ']' for both 't'

console.log(simpleEncoder("eD  aBiT")) // "[[]][[[["
// Two spaces in between