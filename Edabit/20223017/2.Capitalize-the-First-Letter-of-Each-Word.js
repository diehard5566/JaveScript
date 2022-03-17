// Create a function that takes a string as an argument and converts the first character of each
//  word to uppercase. Return the newly formatted string.

const makeTitle = str => {
    // let x = str.split(' ')
    // console.log('------');
    // let result = []
    // for (let i = 0; i < x.length; i++) {
    //     console.log('ele: ', i, x[i]);
    //     let y = x[i].slice(1)
    //     let f = x[i][0].toUpperCase()
    //     let con = f + y
    //     result.push(con)

    // } return result.join(' ')

    return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}


makeTitle("This is a title") // "This Is A Title"

makeTitle("capitalize every word") // "Capitalize Every Word"

makeTitle("I Like Pizza") // "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") // "PIZZA PIZZA PIZZA"