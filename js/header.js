//Get the header
var header = document.getElementById("header-background");

// When the user scrolls down 20px from the top of the document, adjust the navigation background
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.borderRight = "100vw solid rgba(20,20,20,1)";
        header.style.borderBottom = "0vw solid transparent";
    } else {
        header.style.borderTop = "0 solid transparent";
        header.style.borderRight = "100vw solid rgba(20,20,20,.83)";
        header.style.borderBottom = "4vw solid transparent";
    }
};

// Declare a variable for the more button (mobile navigation)
var moreToggled = false;

$("#more-btn").click(function(){
    // If the more menu is toggled
    if(moreToggled){
        $("#mobilenav-more").css("display","none");
    } else {
        $("#mobilenav-more").css("display","inherit");
    }
    // Switch the boolean
    moreToggled=!moreToggled;
});