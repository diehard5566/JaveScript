// Given radius r and height h (in cm), calculate the mass of a cylinder when it's 
// filled with water and the cylinder itself doesn't weigh anything. 
// The desired output should be given in kg and rounded to two decimal places.

// How to solve:

// Calculate the volume of the cylinder. h * pi * r **2
// Convert cm³ into dm³. 1 cm³ to dm³ = 0.001 dm³
// 1dm³ = 1L, 1L is 1Kg.



const weight = (r, h) => Number((Math.PI * h * r ** 2 * 0.001).toFixed(2))//Number can change to + 



weight(4, 10) // 0.5

weight(30, 60) // 169.65

weight(15, 10) // 7.07