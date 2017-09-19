/*slide from left
$(document).ready(function(){
    var r=0, dir=true;
    $(".button").click(function() {
        dir = !dir;
        r = dir? -3000 : 0;
        $(".slide").stop().animate({left: r+'px'}, 500);
    });
});
*/

$(document).ready(function(){

    $(".button").click(function() {
        $(".slide").fadeIn(200);
    });

    $(".back").click(function() {
        $(".slide").fadeOut(200);
    });
});
