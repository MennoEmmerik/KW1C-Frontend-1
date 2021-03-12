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

//Script Galerij
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

//item popup/lightbox oplaten komen
$(".item").click(function(){
  alert("yes");
  $("#popup").css("display","block");

    // Haal de teksten op
    var titel = $(".item .subtitle");
    var subtitle = $(".item .titel");
    var prijs = $(".item .prijs");
    var text = $(".item .content");


    // Zet de teksten in een popup
    $("").text(titel);
    $("").text(subtitle);
    $("").text(prijs);
    $("").text(text);

});

//item popup/lightbox weg halen
$(".pop-close").click(function(){
    alert("yes");
    $("#popup").css("display","none");



});