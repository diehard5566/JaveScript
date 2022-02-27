// Write a function redundant that takes in a string str and 
//returns a function that returns str.

// Examples

//this is closures!
function redundant(str) {
	let re = str;
    const rr = () => {
        console.log(re) 
    }
    return rr;
}



const f1 = redundant("apple")
f1() // "apple"

const f2 = redundant("pear")
f2() // "pear"

const f3 = redundant("")
f3() // ""