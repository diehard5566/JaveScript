// Create a function that transforms a string of upvote counts into an array of numbers.
// Each k represents a thousand.
const transformUpvotes = str => {
    let y = str.split(' ')
    let result = []
    for (let i = 0; i < y.length; i++) {
        if (y[i].endsWith('k')) {
            result.push(Number.parseFloat(y[i].slice(0, -1)) * 1000)
        } else {
            result.push(Number(y[i]))
        }
    }
    return result

    // return str.split(' ')
    //.map(a => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}

transformUpvotes('6.8k 13.5k') // [6800, 13500]

transformUpvotes('5.5k 8.9k 32') // [5500, 8900, 32]

transformUpvotes('20.3k 3.8k 7.7k 992') // [20300, 3800, 7700, 992]
