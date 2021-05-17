var $jq = jQuery.noConflict();

$(function() {

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.banner__slider').slick({
       arrows: false,
       dots: true,
       swipe: false,
       adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 3000
    });

    var mixer = mixitup('.week-products__cards');

});