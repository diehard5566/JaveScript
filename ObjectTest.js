// function Cat(name, color) {
//     this.name = name;
//     this.color = color;

// };

// Cat.prototype.type = "貓科";
// Cat.prototype.eat = function(){
//         console.log("老鼠");
//     }


// const cat = new Cat("a" , "red");

// const key = Object.keys(cat);
// console.log(key);

// function Animal() { }

// Animal.prototype.species = "動物";

// function Cat(name, color) {
//     this.name = name;
//     // Animal.apply(this, arguments);
//     this.color = color;
// };

// function extend(Child , Parent) {
//     let p = Parent.prototype;
//     let c = Child.prototype;

//     for (let i in p) {
//         c[i] = p[i];
//     }

//     c.uber = p;
// }

// extend(Cat, Animal);

// const cat = new Cat("1", "red");
// console.log(cat.species);
//-----------------------------------------------------------------


// function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }

// const Taiwan = {
//     nation: "台灣"
// };

// const Doctor = object(Taiwan);

// Doctor.career = "醫生";

// console.log(Doctor.nation);


// function extendCopy(p) {
//     let c = {};

//     for (let i in p) {
//         c[i] = p[i];
//     }
//     c.uber = p;
//     return c;
// }

// const Doctor = extendCopy(Taiwan);
// Doctor.career = "醫生"
// console.log(Doctor);

const Student = {
    name: "Robot",
    height: 1.6,
    run: function() {
        console.log(this.name + "is running...");
    }
};


function creatStudent(name) {
    //基於Student原型創建一個新對象：
    let s = Object.create(Student);
    //初始化新對象
    s.name = name;
    return s;
}

const xiaoming = creatStudent("小明");
console.log(xiaoming.run());



