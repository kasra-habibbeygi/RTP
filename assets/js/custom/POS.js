 // product slider 1
 var swiper = new Swiper('.POS00', {
     navigation: {

         nextEl: '.POS00_next_arrow',
         prevEl: '.POS00_prev_arrow',

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