// var foo = function () {
    //     console.log('Hello Coursera!');
    // }
    
    
// Immediately invoked function expression
// IIFE - Can take parameters as well 
(function () {
    console.log('Hello Coursera!');
})();


// Used to create own context environments so that
// variables defined do not conflict with global scope

(function (window) {
    var obj = {};
    obj.dreamOn = function () {
        console.log('I have a dream');
    }

    // This creates an attribute of the global scope
    // and passes a reference to created object so that
    // it might be called from the outside
    window.responsibleObject = obj;
})(window);

//Calling with responsibleObject in global scope
responsibleObject.dreamOn();