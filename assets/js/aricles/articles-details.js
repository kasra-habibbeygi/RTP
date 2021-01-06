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

// sticky suggest
// get page height , footer height , sugget cart and stop position 
let pageHeight = $('body').innerHeight();
let footerHeight = $('footer').innerHeight();
let article_suggest = $('.article_suggest ').innerHeight();
let stopPoint = pageHeight - footerHeight -40;
let ariveToPoint = $('.secondary-nav').innerHeight() + $('nav').innerHeight() + $('.tag_field').innerHeight() + $('.offer_product').innerHeight();

$(document).scroll(function () {

    let scroll = $(this).scrollTop();
    let fixedPos = $(this).scrollTop() + 90 + article_suggest;
    
    // add sticky in higher 900px 
    if($(window).width() >= 992){
        
        // when box arrive to footer stop following scroll
        if(fixedPos >= stopPoint){

            $('.article_suggest').css({'position': 'absolute' , 'top': stopPoint - article_suggest});

        }else{

            $('.article_suggest').css({'position': '' , 'top': ''});

        }

        // when scroll going to top of page change position to sticky or fixed
        if (scroll > ariveToPoint - 30) {

            $('.article_suggest').addClass('PS_sticky');
    
        }else{

            $('.article_suggest').removeClass('PS_sticky');

        }

    }

});

$('.check_valid').click(function (e){

    let inp_count = $('form div .valid').length;
    let inp_val = [];
    let error_text = $('.error_handler .error_content p');
    
    // get input value and push them into the inp_val array
    for(let i = 0 ; i < inp_count ; i++){
    
        inp_val.push($('form div .valid').eq(i).val());
    
    }
    
    // check if inp is empty
    if(inp_val[0] == '' || inp_val[1] == '' || inp_val[2] == ''){

        error_text.text('لطفا تمام فیلد ها را پر کنید .');
        $('.error_handler').css('display' , 'flex');
        e.preventDefault();
        
    }

});