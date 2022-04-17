// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine.
// However, he has little knowledge of how to choose a good bottle.
//  Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule.
//  In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party.
// If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

const chosenWine = wines => {
    if (wines.length < 1) {
        return null
    } else if (wines.length < 2) {
        return wines[0].name
    } else {
        let sp = wines.sort((a, b) => a.price - b.price)[1]
        return sp.name
    }

    // if (wines.length === 0) return null
    // if (wines.length === 1) return wines[0].name
    // return wines.sort((a,b) => a.price - b.price)[1].name  sorter ans
}

console.log(
    chosenWine([
        { name: 'Wine A', price: 8.99 },
        { name: 'Wine 32', price: 13.99 },
        { name: 'Wine 9', price: 10.99 },
    ])
) // "Wine 9"

console.log(chosenWine([{ name: 'Wine A', price: 8.99 }])) // "Wine A"

console.log(chosenWine([])) // null

console.log(
    chosenWine([
        { name: 'Wine A', price: 8.99 },
        { name: 'Wine 389', price: 109.99 },
        { name: 'Wine 44', price: 38.44 },
        { name: 'Wine 72', price: 22.77 },
    ])
)
