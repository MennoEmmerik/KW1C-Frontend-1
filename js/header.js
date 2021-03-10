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