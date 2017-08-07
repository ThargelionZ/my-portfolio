/**
 * Created by myles.parker on 7/31/17.
 */

$(".fade").hide(0).delay(500).fadeIn(3000);

$("#menu-tag").click(function(){$("#mobile-nav").slideToggle()});

$('.scrolly').scrolly();

var theWindow = $(window);

setTimeout(function() {
    checkWidth();
}, 500);

function checkWidth() {
    if(theWindow.width() > 900) {
        $("#mobile-nav").css("display", "none");
    }
    setTimeout(function () {
        checkWidth()
    }, 500);
    return true
}

window.onclick = function(event) {
    if (!(event.target.matches("#menu-tag") || event.target.matches(".fa-bars") || event.target.matches(".fa-bars:before") || event.target.matches(".mob-navi"))) {
        $("#mobile-nav").slideUp();
    }
};

$(window).scroll(function() {
    var skills = "#skills";
    var hT = $(skills).offset().top,
        hH = $(skills).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('#scroll-to').fadeIn(3500);
    }
});

function findYear(){
    var d =  new Date();

    var currentYear = d.getFullYear();

    $("#copyright").html("&copy Myles Parker " + currentYear + ". All Rights Reserved.");
}