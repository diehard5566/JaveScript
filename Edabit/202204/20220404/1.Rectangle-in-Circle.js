// Create a function that takes three numbers — the width and height of a rectangle,
//  and the radius of a circle — and returns true if the rectangle can fit inside the circle, false if it can't.

const rectangleInCircle = (w, h, radius) => {
    return Math.hypot(w, h) <= 2 * radius
}

rectangleInCircle(8, 6, 5) // true

rectangleInCircle(5, 9, 5) // false

rectangleInCircle(4, 7, 4) // false
