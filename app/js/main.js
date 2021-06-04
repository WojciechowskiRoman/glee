$(function() {

  $(".product__star").rateYo({
    starWidth: "18px",
    rating: 4,
    normalFill: '#d6d6d6',
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".product__star-mini").rateYo({
    starWidth: "11px",
    rating: 4,
    normalFill: '#d6d6d6',
    ratedFill: "#ffcc00",
    readOnly: true
  });

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

  $('.shop__switch').on('click', function() {
    $('.shop__switch').removeClass('shop__switch--active');
    $(this).addClass('shop__switch--active');
  });

  $('.button-list').on('click', function() {
    $('.shop__cards').addClass('shop__cards--list');
    $('.pagination').addClass('pagination--list')
  });

  $('.button-grid').on('click', function() {
    $('.shop__cards').removeClass('shop__cards--list');
    $('.pagination').removeClass('pagination--list')
  });

  $('.shop__filter, .overflow').on('click', function() {
    $('.shop__filters').toggleClass('shop__filters--active');
    $('.overflow').toggleClass('overflow--active');
  });

  $('.pagination__item').on('click', function() {
    $('.pagination__item').removeClass('pagination__item--active');
    $(this).addClass('pagination__item--active');
  })

  $("a[href^='#']").on('click', function() {
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1200);
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
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
      ],
  });

  $(window).on('scroll', function() {
      $('.header__menu').toggleClass('header__menu--active', $(this).scrollTop() > 0);
  });

  $(window).on('scroll', function() {
        if ($(this).scrollTop()> 500) {
            $('.arrow--up').fadeIn("slow");
        } else {
            $('.arrow--up').fadeOut("slow");
        }
    });

    $(window).on('scroll', function() {
      if ($(window).scrollTop()>=$(document).height()-"999") $(".arrow--down").fadeOut("slow");
        else $(".arrow--down").fadeIn("slow");
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