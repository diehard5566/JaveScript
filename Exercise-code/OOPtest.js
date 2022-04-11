// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     console.log(baseSalary + (overtime * rate)) ;
// }


// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };

// console.log(employee.getWage());

//Factory function
// function creatCircle(radius) {
//     return  {
//         radius,
//         draw: function() {
//             console.log("draw");
//         }
//     };
// };

// const circle = creatCircle(1);


// new String();// '', "",``
// new Boolean();// true, fales
// new Number();// 1, 2, 3, ...

//Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};   

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function () {
        console.log("draw");
    };

    Object.defineProperty(this, "defaultLocation", {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error("Invalid location.");
            
            defaultLocation = value;
        } 

    });
}

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();

// for (let key in circle) {
//     if (typeof circle[key] != "function")
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle)
//     console.log("yes");