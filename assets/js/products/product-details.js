// minimal slider
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

    speed: 1200,

    thumbs: {

        swiper: galleryThumbs

    },
});



// open scale modal
$('.scale_btn').click(function () {

    $('.field_of_scale').fadeIn();
    $('body').css('overflow', 'hidden');

    // image scale slider
    var scaleGalleryThumbs = new Swiper('.scale-gallery-thumbs', {

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
                slidesPerView: 4,
            },
            1170: {
                slidesPerView: 6,
            },

        }

    });

    var scaleGalleryTop = new Swiper('.scale-gallery-top', {

        spaceBetween: 10,
        speed: 1200,

        thumbs: {

            swiper: scaleGalleryThumbs

        },
    });

    $('.close_scale_modal').click(function () {

        $('.field_of_scale').fadeOut();
        $('body').css('overflow', 'auto');

    });

})


// Survey tabs js
let SF_option = $('.SF_option');
let SO_container = $('.SO_container');

for (let i = 0; i < SF_option.length; i++) {

    SF_option.eq(i).click(function () {

        // show and hide Survey option 
        SO_container.css('display', 'none');
        SO_container.eq(i).css('display', 'block');

        // add and remove class to survay option to change color and background color
        SF_option.removeClass('active_SO');
        SF_option.eq(i).addClass('active_SO');

    });

}

// if comments field have active class to show , this if is rendered
if(SF_option.eq(3).attr('class') == 'SF_option active_SO'){

    SF_option.removeClass('active_SO');
    SF_option.eq(3).addClass('active_SO');
    SO_container.css('display', 'none');
    SO_container.eq(3).css('display', 'block');

}

// chose color
$('.color_chose .PDCB_parent div').click(function () {

    $('.color_chose .PDCB_parent div').removeClass('active_pill');
    $(this).addClass('active_pill');

    if($('.NE_field').length != 0){

        $('.color_chose .PDCB_parent div').removeClass('active_pill');

    }

});

// chose internal memory
$('.memory_chose .PDCB_parent div').click(function () {

    $('.memory_chose .PDCB_parent div').removeClass('active_pill');
    $(this).addClass('active_pill');

});

// when user chose memory , color change
for (let x = 0; x <= $('.memory_chose .PDCB_parent div').length; x++) {

    $('.memory_chose .PDCB_parent div').eq(x).click(function () {

        $('.color_chose .PDCB_parent div').removeClass('active_pill');
        $('.color_chose .color_pill').removeClass('active_by_memory');
        $('.color_chose .color_pill').eq(x).addClass('active_by_memory');


    });

}

// if Survey option have yes , background color will be green and if Survey option is no , background color will be red
for(let m = 0 ; m <$('.SO_container ul li .description').length ; m++){

    if($('.SO_container ul li .description').eq(m).text().trim() == 'بله'){

       $('.SO_container ul li .description').eq(m).addClass('yes_option');
        
    }
    else if($('.SO_container ul li .description').eq(m).text().trim() == 'خیر'){
    
       $('.SO_container ul li .description').eq(m).addClass('no_option');
    
    }

}

