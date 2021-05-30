$(function() {

    $(".filter-price__input").ionRangeSlider({
        type: "double",

        onStart: function (data) {
            $('.filter-price__from').text("$" + data.from);
            $('.filter-price__to').text("$" + data.to);
          },
        onChange: function (data) {
            $('.filter-price__from').text("$" + data.from);
            $('.filter-price__to').text("$" + data.to);
        },

    });

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
       autoplay: true,
       autoplaySpeed: 3000,
       fade: true,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            swipe: true,
          }
        }
    ],
    });

    $('.partners__list').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        centerPadding: '40px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
              }
            
        ],
     });

    $(window).on('scroll', function() {
        $('.header__menu').toggleClass('header__menu--active', $(this).scrollTop() > 0);
    });

    var cardsContainerFisrt = document.querySelector('[data-ref="mix-first"]');
    var cardsContainerSecond = document.querySelector('[data-ref="mix-second"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer = mixitup(cardsContainerFisrt, config);
    mixer = mixitup(cardsContainerSecond, config);
});