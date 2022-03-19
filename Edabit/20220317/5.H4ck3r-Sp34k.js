// Create a function that takes a string as an argument and 
// returns a coded (h4ck3r 5p34k) version of the string.

// const replace = {
//     "a": "4",
//     "e": "3",
//     "i": "1",
//     "o": "0",
//     "s": "5",
// }

// const hackerSpeak = str => {
//     let x = str.split('')
//     console.log('----');
//     for (let i = 0; i < x.length; i++) {
//         console.log('ele:', i, x[i]);
//         for (j in replace) {
//             console.log('ele:', j, replace[j]);
//             if (x[i] === j) {
//                 x[i] = replace[j]
//             }
//         }

//     } return x.join('');

// }

function hackerSpeak(str) {
    var chars = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5' };
    str = str.replace(/[aeios]/g, letter => chars[letter]);

    console.log(str);
}


hackerSpeak("javascript is cool") //"j4v45cr1pt 15 c00l"

hackerSpeak("programming is fun") // "pr0gr4mm1ng 15 fun"

hackerSpeak("become a coder") // "b3c0m3 4 c0d3r"