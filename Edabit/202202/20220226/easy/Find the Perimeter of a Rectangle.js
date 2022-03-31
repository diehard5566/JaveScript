// Create a function that takes length and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22
const findPerimeter = (length, width) => {
    return (length * 2) + (width * 2);
};

console.log(findPerimeter(20, 10))