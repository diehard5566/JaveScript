// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. 
// Return the converted temperature values in an array

// The formula to calculate the temperature in Fahrenheit from Celsius is:

// F = C*9/5 +32
// The formula to calculate the temperature in Kelvin from Celsius is:

// K = C + 273.15

const tempConversion = celsius =>
    celsius < -273.15 ? "Invalid" : [+(celsius * 9 / 5 + 32).toFixed(2), +(celsius + 273.15).toFixed(2)]





console.log(tempConversion(0));// [32, 273.15]
// 0°C is equal to 32°F and 273.15 K.

console.log(tempConversion(100)); // [212, 373.15]

console.log(tempConversion(-10)); // [14, 263.15]

console.log(tempConversion(-273.16)); // [572.72, 573.55]