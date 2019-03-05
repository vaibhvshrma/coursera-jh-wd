// Function constructors; aka classes

function Circle (radius) {   //Convention to capitalise
    this.radius = radius;

    // Cannot return anything; new does that for this


    //This function will be created everytime an object is created
    // this.getArea = 
    //     function () {
    //         return Math.PI * Math.pow(this.radius,2);
    //     };
}

// Is like a static function, created once and common to all instances of this class
// Must be done outside the function constructor
Circle.prototype.getArea =  
    function () {
        return Math.PI * Math.pow(this.radius,2);
    };

var myCircle = new Circle(10);    // new object
console.log(myCircle.getArea());
console.log(myCircle);