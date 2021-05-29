$(function() {

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.header__burger, .header__menu-list, .userbar' ).on('click', function() {
        $('.header__burger').toggleClass('header__burger--active');
        $('.header__menu-list').toggleClass('header__menu-list--active');
        $('.userbar').toggleClass('userbar--active');
        $('body').toggleClass('lock');
    });

    $('.banner__slider').slick({
       arrows: false,
       dots: true,
       swipe: false,
       adaptiveHeight: true,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            swipe: true,
          }
        }
    ]
    //    autoplay: true,
    //    autoplaySpeed: 3000
    });

    $('.partners__list').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        centerPadding: '40px',
     });

    $(window).on('scroll', function() {
        $('.header__menu').toggleClass('header__menu--active', $(this).scrollTop() > 0);
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