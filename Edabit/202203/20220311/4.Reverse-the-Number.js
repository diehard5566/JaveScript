// Create a function that takes an integer n and reverses it.

const rev = n => Math.abs(n).toString().split('').reverse().join('');



rev(5121) // "1215"

rev(69) // "96"

rev(-122157) // "751221"