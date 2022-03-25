// Create a function that determines whether a shopping order is eligible for free shipping.
// An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

const freeShipping = order => console.log(Object.values(order).reduce((a, b) => a + b) > 50.0)

freeShipping({ Shampoo: 5.99, 'Rubber Ducks': 15.99 }) // false

freeShipping({ 'Flatscreen TV': 399.99 }) // true

freeShipping({ Monopoly: 11.99, 'Secret Hitler': 35.99, Bananagrams: 13.99 }) // true
