// Create a function that takes the height and radius of a cone as arguments and 
// returns the volume of the cone rounded to the nearest hundredth.

// Volume of a Cone Image

const coneVolume = (h, r) => Number(((Math.PI * h * (r ** 2)) / 3).toFixed(2));


console.log(coneVolume(3, 2));  // 12.57

console.log(coneVolume(15, 6)); // 565.49

console.log(coneVolume(18, 0)); // 0