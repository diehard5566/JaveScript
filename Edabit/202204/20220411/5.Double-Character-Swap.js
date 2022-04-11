// Write a function to replace all instances of character c1 with character c2 and vice versa.

const doubleSwap = (str, c1, c2) => {
    let x = str.split('')
    x
    for (let i = 0; i < x.length; i++) {
        console.log(x[i])
        if (x[i] === c1) {
            x[i] = c2
        } else if (x[i] === c2) {
            x[i] = c1
        }
        x
    }
    console.log(x.join(''))
    x
    c1
    c2

    // const doubleSwap = (str, c1, c2) => [...str].map(v => v === c1 ? c2 : v === c2 ? c1 : v).join('');
}

doubleSwap('aabbccc', 'a', 'b') // "bbaaccc"

doubleSwap('random w#rds writt&n h&r&', '#', '&')
// "random w&rds writt#n h#r#"

doubleSwap('128 895 556 788 999', '8', '9')
// "129 985 556 799 888"
