// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
//  A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

const getTotalPrice = groceries => {
    let sum = 0
    for (let i in groceries) {
        let x = groceries[i].quantity
        let y = groceries[i].price
        sum += x * y
    }
    ;+sum.toFixed(1)
}

// 1 bottle of milk:
// getTotalPrice([{ product: 'Milk', quantity: 1, price: 1.5 }])
// /➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//     { product: 'Milk', quantity: 1, price: 1.5 },
//     { product: 'Cereals', quantity: 1, price: 2.5 },
// ])
// ➞ 4

// 3 bottles of milk:
// getTotalPrice([{ product: 'Milk', quantity: 3, price: 1.5 }])
// ➞ 4.5

// Several groceries:
// getTotalPrice([
//     { product: 'Milk', quantity: 1, price: 1.5 },
//     { product: 'Eggs', quantity: 12, price: 0.1 },
//     { product: 'Bread', quantity: 2, price: 1.6 },
//     { product: 'Cheese', quantity: 1, price: 4.5 },
// ])
//➞ 10.4

// Some cheap candy:
getTotalPrice([
    { product: 'Chocolate', quantity: 1, price: 0.1 },
    { product: 'Lollipop', quantity: 1, price: 0.2 },
])
//➞ 0.3
