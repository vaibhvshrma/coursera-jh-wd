// DOM Manipulation

// document is a property of window i.e. the global scope
// this will return null if script is in head
// because other elements are not defined then as html is sequential
// console.log(document.getElementById('title'));

// console.log(document instanceof HTMLDocument);
// document is used for manipulation

function sayHello() {

    // Retrieve value input by the user
    // value property is only for input elements
    var name = document.getElementById('name').value;
    var message = '<h2>Hi, ' + name + '!</h2>';
    
    // document
    //     .getElementById('content')
    //     .textContent = message;
    
    // Want this to be an h2
    document
        .getElementById('content')
        .innerHTML = message;     // tells browser to render as HTML

    if (name.toLowerCase() === 'student') {
        var title = 
            document
            .querySelector('#title')    //Use CSS selectors
            .textContent;
        
        title += ' & Lovin it!';

        // .querySelectorAll returns a list of all matching elements

        document
            .querySelector('h1')
            .textContent = title;
    }
    
}