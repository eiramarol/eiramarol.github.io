$(document).ready(function() {

        $(".h1Style,#ffc,#ghub,#linkedin,h4").hide();

        $(".h1Style").fadeIn(5000);
        $("#ffc").fadeIn(6000);
        $("#ghub").fadeIn(7000);
        $("#linkedin").fadeIn(8000);
        $("h4").fadeIn(8500);


// button hover
    $("button").hover(function() {
        $("#"+$(this).attr("id")).css('background','rgba(255,255,255,1)');
    }, function() {
        $("#"+$(this).attr("id")).css('background','rgba(255,255,255,.7)');
    });



});


