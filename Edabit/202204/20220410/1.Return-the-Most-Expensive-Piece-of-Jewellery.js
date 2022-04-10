// You go to a jewelry shop and try to find the most expensive piece of jewelry.
// You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns
// "The most expensive one is the {name of jewelry piece}".

const mostExpensive = obj => {
    let x = Object.entries(obj).sort(([, a], [, b]) => b - a)[0][0]
    console.log(`The most expensive one is the ${x}`)
    x
}

mostExpensive({
    'Diamond Earrings': 980,
    'Gold Watch': 250,
    'Pearl Necklace': 4650,
})
// ➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
    'Silver Bracelet': 280,
    'Gemstone Earrings': 180,
    'Diamond Ring': 3500,
})
// ➞ "The most expensive one is the Diamond Ring"
