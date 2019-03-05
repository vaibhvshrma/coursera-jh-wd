// Closures

function makeMultiplier(multiplier) {

    function b() {
        //Check for multiplier in this lexical scope then go out if not found
        console.log('Multiplier is: ' + multiplier);
    }

    b();

    return (
        // This does not get a lexical environment, this, etc
        // When this is returned, JS preserves the outer lexical environment of this function for later use
        // This is called closure
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
