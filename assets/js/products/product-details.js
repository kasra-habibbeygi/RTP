var galleryThumbs = new Swiper('.gallery-thumbs', {

    spaceBetween: 20,
    speed: 1200,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },

    }

});

var galleryTop = new Swiper('.gallery-top', {

    spaceBetween: 10,
    speed: 1200,

    thumbs: {

        swiper: galleryThumbs

    },
});