// Create a function which replaces all the x's in the string in the following ways:

// Replace all x's with "cks" UNLESS:

// The word begins with "x", therefore replace it with "z".
// The word is just the letter "x", therefore replace it with "ecks".

const xPronounce = sentence => {
    let x = sentence.split(' ')
    for (let i = 0; i < x.length; i++) {
        console.log(x[i])
        if (x[i].length === 1 && x[i] === 'x') {
            x[i] = 'ecks'
        } else if (x[i][0] === 'x') {
            console.log(x[i])
            console.log(x[i].slice(1))
            x[i] = 'z' + x[i].slice(1)
        } else if (x[i].includes('x')) {
            console.log(x[i])
            let result = x[i].replace('x', 'cks')
            x[i] = result
        }
    }
    console.log(x.join(' '))
    // let arr = sentence.split(' ').map(x => {
    //   if(x === 'x'){
    //     return x.replace('x', 'ecks');
    //   } else if(x.startsWith('x')){
    //     return x.replace('x', 'z');
    //   } else {
    //     return x.replace('x', 'cks');
    //   }
    // })
    // sentence.replace(/\bx\b/g, "ecks")
    // .replace(/\bx/g, "z")
    // .replace(/x/g, "cks");

    // let arr = sentence.split(' ').map(x => {
    //   if(x === 'x'){
    //     return x.replace('x', 'ecks');
    //   } else if(x.startsWith('x')){
    //     return x.replace('x', 'z');
    //   } else {
    //     return x.replace('x', 'cks');
    //   }
    // })
}

xPronounce('Inside the box was a xylophone') // "Inside the bocks was a zylophone"

xPronounce('The x ray is excellent') // "The ecks ray is eckscellent"

xPronounce('OMG x box unboxing video x D') // "OMG ecks bocks unbocksing video ecks D"
