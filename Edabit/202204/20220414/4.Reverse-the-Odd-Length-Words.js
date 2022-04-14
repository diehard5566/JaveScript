// Given a string, reverse all the words which have odd length. The even length words are not changed.

const reverseOdd = str => {
    let l = str
        .split(' ')
        .map(e => (e.length % 2 === 1 ? e.split('').reverse().join('') : e))
        .join(' ')
    l
}

reverseOdd('Bananas') // "sananaB"

reverseOdd('One two three four') // "enO owt eerht four"

reverseOdd('Make sure uoy only esrever sdrow of ddo length')
// "Make sure you only reverse words of odd length"
