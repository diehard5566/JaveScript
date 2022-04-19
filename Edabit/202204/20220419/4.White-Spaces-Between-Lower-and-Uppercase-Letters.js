// Write a function that inserts a white space between every instance
//  of a lower character followed immediately by an upper character.

const insertWhitespace = s => {
    let x = s.split('')
    for (let i = 1; i < x.length; i++) {
        console.log(x[i])
        if (x[i] === x[i].toUpperCase()) {
            console.log(' ' + x[i])
            x[i] = ' ' + x[i]
        }
    }
    x
    console.log(x.join(''))

    //s[0]+[...s.substring(1)].map(x=>x.toUpperCase()===x?' '+x:x).join('');
}

insertWhitespace('SheWalksToTheBeach') // "She Walks To The Beach"

// insertWhitespace('MarvinTalksTooMuch') // "Marvin Talks Too Much"

// insertWhitespace('TheGreatestUpsetInHistory') // "The Greatest Upset In History"
