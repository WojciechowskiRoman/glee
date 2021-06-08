$(function() {

  new WOW().init();

  $(".product__star").rateYo({
    starWidth: "18px",
    rating: 4,
    spacing: "8px",
    normalFill: '#d6d6d6',
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
  });

  $(".aside__product-star").rateYo({
    starWidth: "11px",
    rating: 4,
    spacing: "6px",
    normalFill: '#d6d6d6',
    ratedFill: "#ffcc00",
    readOnly: true, 
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
  });

  $('.aside__price-input').ionRangeSlider({
      type: "double",
      step: 0.01,

      onStart: function (data) {
          $('.aside__price-from').text("$" + data.from);
          $('.aside__price-to').text("$" + data.to);
      },
      onChange: function (data) {
          $('.aside__price-from').text("$" + data.from);
          $('.aside__price-to').text("$" + data.to);
      },
  });

  $('.catalog__switch').on('click', function() {
    $('.catalog__switch').removeClass('catalog__switch--active');
    $(this).addClass('catalog__switch--active');
  });

  $('#switch-list').on('click', function() {
    $('.catalog__cards').addClass('catalog__cards--list');
    $('.pagination').addClass('pagination--list')
  });

  $('#switch-grid').on('click', function() {
    $('.catalog__cards').removeClass('catalog__cards--list');
    $('.pagination').removeClass('pagination--list')
  });

  $('.catalog__switch--filter, .overflow').on('click', function() {
    $('.aside').toggleClass('aside--active');
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