// Functions are First-Class Data Types
// Functions are objects

function multiply(x,y) {
    return x*y;
}

// Setting properties on functions

multiply.version = 'v1.0.0'
console.log(multiply.version);

// Function factory

function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier*x;
    };

    return myFunc;
}

var multBy3 = makeMultiplier(3);
console.log(multBy3(5));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments

function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, doubleAll);
console.log(result);

