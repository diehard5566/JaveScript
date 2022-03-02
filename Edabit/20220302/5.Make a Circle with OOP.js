// Your task is to create a Circle constructor that creates a circle with 
// a radius provided by an argument. The circles constructed must have two methods 
// getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas 
// and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor 
// which you can use as a base example.

// Examples

class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
class Circle {
    constructor(r){
        this.r = r;
    }
    getArea(){
        return Math.PI * (this.r ** 2);
    }
    getPerimeter(){
        return 2 * Math.PI * this.r;
    }
}
  
  
  // unquote and use run to test these cases:
  
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  

let circy = new Circle(11)
console.log(circy.getArea());

// Should return 380.132711084365
let circ = new Circle(4.44)
console.log(circ.getPerimeter());

// Should return 27.897342763877365