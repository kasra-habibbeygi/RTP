// sticky summary
// get page height , footer height , card summary and stop position 
let pageHeight = $('body').innerHeight()
let footerHeight = $('footer').innerHeight();
let card_summary = $('.card_summary ').innerHeight();
let stopPoint = pageHeight - footerHeight - 28;

$(document).scroll(function () {

    let scroll = $(this).scrollTop();
    let fixedPos = $(this).scrollTop() + 90 + card_summary;
    
    // add sticky in higher 900px 
    if($(window).width() >= 900){
        
        // when box arrive to footer stop following scroll
        if(fixedPos >= stopPoint){

            $('.card_summary').css({'position': 'absolute' , 'top': stopPoint - card_summary});

        }else{

            $('.card_summary').css({'position': '' , 'top': ''});

        }

        // when scroll going to top of page change position to sticky or fixed
        if (scroll > 80) {

            $('.card_summary').addClass('PS_sticky');
    
        }else{

            $('.card_summary').removeClass('PS_sticky');

        }

    }

});