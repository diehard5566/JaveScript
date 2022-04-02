// In music, notes can be written out in multiple ways (especially for notes on the black keys).
//  Although these notes are spelled out differently, they still are the same note physically.

//  Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

const getEquivalent = note => {
    const e = {
        'C#': 'Db',
        'D#': 'Eb',
        'F#': 'Gb',
        'G#': 'Ab',
        'A#': 'Bb',
    }

    for (let i in e) {
        if (note === i) {
            return e[note]
        } else if (note === e[i]) {
            return i
        }
    }
}

// const noteValues = {'C#': 'Db','D#': 'Eb','F#': 'Gb','G#': 'Ab','A#': 'Bb',
// 									  'Db': 'C#','Eb': 'D#','Gb': 'F#','Ab': 'G#','Bb': 'A#'}
// const getEquivalent = note => noteValues[note]

console.log(getEquivalent('D#')) // "Eb"

console.log(getEquivalent('Gb')) // "F#"

console.log(getEquivalent('Bb')) //"A#"
