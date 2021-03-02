// header big slider 
var swiper = new Swiper('.HRBS', {

  loop: true,
  effect: 'fade',

  navigation: {

    nextEl: '.RHS_next_arrow',
    prevEl: '.RHS_prev_arrow',

  },

});

// product slider 1
var swiper = new Swiper('.SP000', {
  navigation: {

    nextEl: '.PS000_next_arrow',
    prevEl: '.PS000_next_prev',

  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 11,
      slidesPerGroup: 1,
      speed: 300,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 11,
      slidesPerGroup: 1,
      speed: 400,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 11,
      slidesPerGroup: 2,
      speed: 700,
    },
    1110: {
      slidesPerView: 4,
      spaceBetween: 11,
      slidesPerGroup: 3,
      speed: 1000,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 11,
      slidesPerGroup: 4,
      speed: 1200,
    },
  }
});

// accessories modal
$('#accessories').click(function (e) {

  $('body').css('overflow' , 'hidden')
  $('.accessories_modal').fadeIn();
  e.preventDefault();

  $('.close_ACSM').click(function(){

    $('body').css('overflow' , 'auto')
    $('.accessories_modal').fadeOut();
    e.preventDefault();

  });

});