// Write a function that returns the position of the second occurrence of "zip" in a string,
//  or -1 if it does not occur at least twice.
//   Your code should be general enough to pass every possible case where "zip"
//   can occur in a string.

const findZip = str => {
    let position1 = str.indexOf('zip')
    let position2 = str.slice(position1 + 1).indexOf('zip')
    return position2 > -1 ? position2 + position1 + 1 : position2

    // return str.indexOf("zip", str.indexOf("zip") + 1) sorter ans
}

findZip('all zip files are zipped') // 18

findZip(
    "We believe university-level zip education can be both high quality and low cost.Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world."
) // -1
