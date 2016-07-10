$(document).ready(function(e) {
    $("button").hover(function() {
        $("#"+$(this).attr("id")).css('background','rgba(255,255,255,1)');
    }, function() {
        $("#"+$(this).attr("id")).css('background','rgba(255,255,255,.7)');
    });

});