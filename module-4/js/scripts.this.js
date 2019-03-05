// Object literals

// var literalCircle = {    //same as new Object()
//     radius: 10,
//     getArea : function () {
//         console.log(this);
//         var self = this;

//         // 'this' within internal functions refers to global window, hence doing this.radius will not actually work; use self assigned to this
//         var increaseRadius = function() {
//             self.radius = 20;
//         }
//         increaseRadius();

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());


function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() {
    console.log(this.name + ' likes barking! Bark!');
}

var max = new Dog('Max', 'Buddy');
max.bark();