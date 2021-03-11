// JS
// onpage load
$(function() {
    console.log("page is loaded");

});







// Script footer
// onclick nieuwsbrief
$("#ULnieuwsbrief").click(function() 
{ 
    // zet contact neer en haal nieuwsbrief weg
    $(".nieuwsbrief").css("display","block");
    $(".contact").css("display","none");

    //zet de lijn der onder goed. --bugged Klik 2 keer op de het li  
    $("#ULnieuwsbrief span").toggleClass("footer-ul-hover");
    $("#ULcontact span").toggleClass("footer-ul-hover");

    // verander de tekst
    $(".col-md-9 > h2").text("Nieuwsbrief");
    $(".col-md-9 > h2 + p").text("Wilt u op de hoogte blijven van nieuwe evenementen/schilderijen?");

});

// onclick contact
$("#ULcontact").click(function() 
{ 
    // zet nieuwsbrief neer en haal contact weg
    $(".nieuwsbrief").css("display","none");
    $(".contact").css("display","block");

    //zet de lijn der onder goed. --bugged --Klik 2 keer op de het zelfde li 
    $("#ULnieuwsbrief span").toggleClass("footer-ul-hover");
    $("#ULcontact span").toggleClass("footer-ul-hover");

    // verander de teks
    $(".col-md-9 > h2").text("Contact");
    $(".col-md-9 > h2 + p").text("Heeft u nog vragen? Neem dan contact met ons op");

});
