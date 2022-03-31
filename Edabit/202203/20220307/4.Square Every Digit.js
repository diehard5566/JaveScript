//Create a function that squares every digit of a number.

const squareDigits = n => {
    // let newarr = []
    // let s = n.toString().split('').map(Number)
    
    // for (let i = 0; i < s.length; i++){
    //     newarr.push(s[i] ** 2);
    // }
    // let ss = newarr.join('')

    // return ss;    

    return +n.toString().split('').map(num => (num ** 2)).join('');
    //	return +[...String(n)].map(x => x*x).join('')
}


console.log(squareDigits(9119)) // 811181

console.log(squareDigits(2483)) // 416649

console.log(squareDigits(3212)) // 9414