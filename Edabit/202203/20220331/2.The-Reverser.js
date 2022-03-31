// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

const reverse = str =>
    str
        .split('')
        .map(e => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
        .reverse()
        .join('')

reverse('Hello World') // "DLROw OLLEh"

reverse('ReVeRsE') // "eSrEvEr"

reverse('Radar') // "RADAr"
