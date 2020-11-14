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

  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 4,
  speed: 1200,

  navigation: {

    nextEl: '.PS000_next_arrow',
    prevEl: '.PS000_next_prev',

  },

  

});