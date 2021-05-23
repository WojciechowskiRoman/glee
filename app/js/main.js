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
    //    autoplay: true,
    //    autoplaySpeed: 3000
    });

    $('.partners__list').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        centerPadding: '40px',
        // autoplay: true,
        // autoplaySpeed: 5000
     });

    $(window).on('scroll', function() {
        $('.menu').toggleClass('menu--active', $(this).scrollTop() > 0);
    });

    var cardsContainerFisrt = document.querySelector('[data-ref="filter__first"]');
    var cardsContainerSecond = document.querySelector('[data-ref="filter__second"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer = mixitup(cardsContainerFisrt, config);
    mixer = mixitup(cardsContainerSecond, config);
});