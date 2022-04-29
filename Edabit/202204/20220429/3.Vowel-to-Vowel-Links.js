// Given a sentence as str, return true if any two adjacent words have this property:
// One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

const vowelLinks = str => {
    // let x = str.split(' ')
    // for (let i = 0; i < x.length; i++) {
    //   console.log(x[i])
    //   let final = x[i][x[i].length -1]
    //   let begin = x[i][0]

    //   final
    //   begin

    //   for (let j = 0; j < x[i].length; j++) {
    //     console.log(x[i][j]);

    //   }

    // }

    // x

    return /[aeiou] [aeiou]/.test(str)
}

// vowelLinks('a very large appliance') // true

vowelLinks('go to edabit') // true

// vowelLinks('an open fire') // false

// vowelLinks('a sudden applause') // false
