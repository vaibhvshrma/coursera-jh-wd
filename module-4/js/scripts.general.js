// var message = "in global"
// console.log('global: message = ' + message);

// var a = function () {
//     var message = "inside a";
//     console.log("a: message = " + message);
//     b();
// }

// function b () {
//     //Outer scope of b is global hence global message will be printed
//     console.log("b: message = " + message);
// }

// a(); 

// var x;
// console.log(x);

// if(x == undefined) {
//     console.log('x is undefined');
// }

// x = 5;
// if(x == undefined) {
//     console.log('x is not defined');
// }
// else {
//     console.log('x has been defined');
// }


// Lecture 43 Common language constructs
// console.log(undefined/5);


// This curly brace style does not work in JS
function a()
{
    return 
    {
        name: "Vaibhav"
    };
}

function b() {
    return {
        name: "Vaibhav"
    }
}

console.log(a());
console.log(b());