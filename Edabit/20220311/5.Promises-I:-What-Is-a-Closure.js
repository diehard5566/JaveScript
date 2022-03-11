// Closures are functions that remember their lexical environments.
//  Lexical environments mean the environment in which the function was declared.

// function parent(x) {
//   return function closure() {    // Closure is declared here.
//     return x
//   }
// }

// const remember = parent("remembers me")
// // Seems like the variable x would be gone after
// // parent is executed, but it's not.

// closure()
// // Returns "remembers me" because the inner
// // function remembers x.
// Fix the greetingMaker() function so that it works with the greeting() function.
// The greeting() function has already been created (check the Tests tab).

function greetingMaker(salutation) {
	return function (name) {
	  return salutation + ", " + name 	
	}
}

const greeting = greetingMaker("Hello")
console.log(greeting("James"));  // "Hello, James"