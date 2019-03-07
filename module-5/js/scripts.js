// Event handling
// onclick in inline HTML then 'this' points to the global window;
// whereas on executing it from here by added event listeners, the context sent is of the button
document.addEventListener("DOMContentLoaded",   // Listening for the event where all content is loaded
  function (event) {
    
    function sayHello (event) {
        // we don't need to know what triggered the event
        // we don't need to reselect the element
        this.textContent = "Said it!";
        var name =
        document.getElementById("name").value;
        var message = "<h2>Hello " + name + "!</h2>";

        document
            .getElementById("content")
            .innerHTML = message;

        if (name === "student") {
            var title = 
            document
                .querySelector("#title")
                .textContent;
            title += " & Lovin' it!";
            document
                .querySelector("h1")
                .textContent = title;
        }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;




