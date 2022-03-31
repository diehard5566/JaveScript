// Write a function that takes a string of one or more words as an argument and returns the same string,
//  but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.
//   Spaces will be included only when more than one word is present.

const reverse = str => {
    let x = str.split(' ')
    for (let i = 0; i < x.length; i++) {
        if (x[i].length >= 5) {
            x[i] = x[i].split('').reverse().join('')
        }
    }
    return x.join(' ')
}

//return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');

reverse('Reverse') // "esreveR"

reverse('This is a typical sentence.') // "This is a lacipyt .ecnetnes"

// reverse('The dog is big.') // "The dog is big."
