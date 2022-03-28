const obj = { first: 'James', last: 'Baker', alias: 'JB' }

var { first = 'John', last = 'Doe', nickname = 'JD' } = obj

console.log(nickname) // outputs nickname is not defined
// There may be times where we would like the property name to be different from
// the object property names we receive and also give those new property names a default value.

// Question
// Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD".
// Ignore the .toString() function (used for validation).

const str = `({ first = "John", last = "Doe", alias :nickname = 'JD' } = { first: "James", last: "Baker" }).toString()`
