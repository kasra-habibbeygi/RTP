var swiper = new Swiper('.AOS', {
    
    autoplay: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },


    navigation: {
        nextEl: '.AOS_next_arrow',
        prevEl: '.AOS_prev_arrow',
    },

    breakpoints: {

        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            speed: 700,
        },
        550: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            speed: 700,
        },
        800: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            speed: 700,
        },
        992: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            speed: 700,
        },
    }
});

