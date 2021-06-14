$(function() {

  $('.product-tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__tab').removeClass('product-tabs__tab--active');
    $($(this).attr('href')).addClass('product-tabs__tab--active');

  });

  $('.related__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
  ],
  });

  new WOW().init();

  $('.product-one__count').styler();

  $(".product__star").rateYo({
    starWidth: "18px",
    rating: 4,
    spacing: "8px",
    normalFill: '#d6d6d6',
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
  });

  $(".aside__additional-star").rateYo({
    starWidth: "11px",
    rating: 4,
    spacing: "6px",
    normalFill: '#d6d6d6',
    ratedFill: "#ffcc00",
    readOnly: true, 
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
  });

  $(".product-one__star").rateYo({
    starWidth: "18px",
    rating: 4,
    spacing: "8px",
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

  $('.product-slider__small').slick({
    asNavFor: '.product-slider__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    draggable: false,
   });
  
   $('.product-slider__big').slick({
    asNavFor: '.product-slider__small',
    arrows: false,
    draggable: false,
    fade: true,
  });

  $(window).on('scroll', function() {
      $('.header__menu').toggleClass('header__menu--active', $(this).scrollTop() > 0);
  });

  $(window).on('scroll', function() {
        if ($(this).scrollTop()> 500) {
            $('.arrow').fadeIn("slow");
        } else {
            $('.arrow').fadeOut("slow");
        }
    });

  $('.arrow').on('click', function() {
    $("body,html").animate({
      scrollTop:0
      }, 800);
    return false;
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