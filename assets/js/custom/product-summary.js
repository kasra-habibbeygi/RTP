// sticky summary
// get page height , footer height , card summary and stop position 
let pageHeight = $('body').outerHeight(true)
let footerHeight = $('footer').outerHeight(true);
let card_summary = $('.card_summary').outerHeight(true);
let POS  = $('.POS').outerHeight(true);
let secNav  = $('.secondary-nav').height();
let stopPoint = pageHeight - footerHeight - POS;

$(document).scroll(function () {

    let scroll = $(this).scrollTop();
    let fixedPos = scroll + 90 + card_summary;
    
    // add sticky in higher 900px browser width
    if($(window).width() >= 900){
        
        // when box arrive to footer stop following scroll
        if(fixedPos >= stopPoint){

            $('.card_summary').css({'position': 'absolute' , 'top': stopPoint - card_summary});

        }else{

            $('.card_summary').css({'position': '' , 'top': ''});

        }

        // when scroll going to top of page change position to sticky or fixed
        if (scroll > secNav) {

            $('.card_summary').addClass('PS_sticky');
    
        }else{

            $('.card_summary').removeClass('PS_sticky');

        }

    }

});
