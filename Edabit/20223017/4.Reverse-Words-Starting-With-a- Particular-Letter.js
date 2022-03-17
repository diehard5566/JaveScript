// Write a function that reverses all the words in a sentence that start with a particular letter.

const specialReverse = (s, c) => {
    // let arr = s.split(' ')
    // // console.log(arr);
    // // console.log('----');
    // for (let i = 0; i < arr.length; i++) {
    //     // console.log('ele: ', i, arr[i]);
    //     if (!arr[i].indexOf(c)) {
    //         arr[i] = arr[i].split('').reverse().join('')
    //     }
    // } return arr.join(' ')

    return s.split(" ")
        .map(x => x[0] == c ? x.split("").reverse().join("") : x)
        .join(" ");
}


console.log(specialReverse("word searches are super fun", "s"));
// "word sehcraes are repus fun"

console.log(specialReverse("first man to walk on the moon", "m"));
// "first nam to walk on the noom"

console.log(specialReverse("peter piper picked pickled peppers", "p"));
// "retep repip dekcip delkcip sreppep"