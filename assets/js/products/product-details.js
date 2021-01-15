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

// chose color
$('.color_chose .PDCB_parent div').click(function () {

    $('.color_chose .PDCB_parent div').removeClass('active_pill');
    $(this).addClass('active_pill');

});

// chose internal memory
$('.memory_chose .PDCB_parent div').click(function () {

    $('.memory_chose .PDCB_parent div').removeClass('active_pill');
    $(this).addClass('active_pill');

});

// form validations

$('.check_valid').click(function (e) {

    let inp_count = $('form div .valid').length;
    let inp_val = [];
    let error_text = $('.error_handler .error_content p');

    // get input value and push them into the inp_val array
    for (let i = 0; i < inp_count; i++) {

        inp_val.push($('form div .valid').eq(i).val());

    }

    // check if inp is empty
    if (inp_val[0] == '' || inp_val[1] == '' || inp_val[2] == '') {

        error_text.text('لطفا تمام فیلد ها را پر کنید .');
        $('.error_handler').css('display', 'flex');
        e.preventDefault();
    }

});

// when user chose memory , +
for (let x = 0; x <= $('.memory_chose .PDCB_parent div').length; x++) {

    $('.memory_chose .PDCB_parent div').eq(x).click(function(){

        $('.color_chose .color_pill').removeClass('active_by_memory');
        $('.color_chose .color_pill').eq(x).addClass('active_by_memory');

    });

}