// Create a function that will remove the letters "a", "b" and "c" from the given string 
// and return the modified version. If the given string does not contain "a", "b", or "c", return null.


const removeABC = str => {

    // let x = str.split('')
    // console.log('----');
    // for (let i = 0; i < x.length; i++) {
    //     console.log('ele: ', i, x[i]);
    //     if (x[i] === 'a' || x[i] === 'b' || x[i] === 'c') {
    //         x[i] = ''
    //     }
    //     else {
    //         //return null
    //     }
    // }
    // return x.join('')

    let re = { 'a': '', 'b': '', 'c': '' }
    let x = str.replace(/[abc]/g, letter => re[letter])
    return str.match(/[abc]/g) ? x : null


}

console.log(removeABC("This is awesome")) // "This might e  it hrd"

console.log(removeABC("hello world!")) // null

console.log(removeABC("")) // null