$(function() {

    // collapse the drop down menu when clicked elsewhere
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;        // the width of the browser

        if(screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});