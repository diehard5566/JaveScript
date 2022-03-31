// Create a function that takes in a year and returns the correct century.

const century = year => {
    return year > 2000 ? `${Math.ceil(year / 100)}st century` : `${Math.ceil(year / 100)}th century`
}

century(1756) // "18th century"

century(1555) // "16th century"

century(1000) // "10th century"

century(1001) // "11th century"

console.log(century(2005))
// "21st century"
