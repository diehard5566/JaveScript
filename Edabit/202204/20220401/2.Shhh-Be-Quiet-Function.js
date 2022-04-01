// Write a function that removes all capital letters from a sentence except the first letter,
// puts quotation marks around the sentence and adds ", whispered Edabit." at the end.

const shhh = sentence => {
    let f = sentence.slice(0, 1).toUpperCase() + sentence.slice(1).toLowerCase()
    return `"${f}", whispered Edabit.`
}

shhh('HI THERE!') // '"Hi there!", whispered Edabit.'

shhh("tHaT'S Pretty awesOme") // '"That's pretty awesome", whispered Edabit.'

shhh('') // '"", whispered Edabit.'
