// Arrays
// var arr = new Array();
// arr[0] = 'Vaibhav';
// arr[1] = 2;
// arr[2] = function(name) {
//     console.log('Hello ' + name);
// };
// arr[3] = {course: 'HTML, CSS & JS'};

// console.log(arr);
// arr[2]('Generic Name')
// arr[2](arr[0]);
// console.log(arr[3]['course']);


//Shorthand for array creation

var names = ['Vaibhav', 'Sagarika'];
console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log('Hello, ' + names[i]);
// }

// names[100] = 'Jim';
// // Nothing in between

// for (var i = 0; i < names.length; i++) {
//     console.log('Hello, ' + names[i]);
// }

// var myObj = {
//     name: 'Vaibhav',
//     course: 'B Tech',
//     platform: 'MUJ'
// };

// for (var prop in myObj) {
//     console.log(prop + ': ' + myObj[prop]);
// }


for (var name in names) {
    console.log('Hello, ' + names[name]);
}

// Arrays are objects
names.greeting = 'Hi!';
console.log(names);


for (var name in names) {
    console.log('Hello, ' + names[name]);
}
