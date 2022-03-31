// Create a function that takes a string road and returns the car that's in first place. 
// The road will be made of "=", and cars will be represented by letters in the alphabet.


const firstPlace = road => {
    // let re = road.split('').reverse()
    // for (let i = 0; i < re.length; i++) {
    //     if(re[i] != "="){
    //         return re[i]
    //     }        
    // }return `No ${road.length? 'car': 'road'} available`
    const r = [...road]
	if (!r.length){ return 'No road available'}
    
	return r.reverse().find(a=>a!="=") || 'No car available'
   
}

console.log(firstPlace("====b===O===e===U=A=="));
 // "A"

 console.log(firstPlace("e==B=Fe")) // "e"

 console.log(firstPlace("proeNeoOJGnfl")) // "l"