// when user click on 'add to card btn' , errors show
$('.add_to_basket').click(function () {

    // if user dont chose color , error text show
    if ($('.color_chose .PDCB_parent div').hasClass('active_pill') == false) {

        $('.flow_error_field P').text('ابتدا رنگ مورد نظر خود را انتخاب کنید .');
        $('.flow_error_field').css('right', '20px');

        // if goods add to card , done text showed
    } else {

        let cardCount = $('.B-conter').text();
        $('.B-conter').text(parseInt(cardCount) + 1);
        $('.flow_error_field').css('right', '-500px');


        setTimeout(function () {

            $('.flow_error_field P').text('محصول شما به سبد خرید اضافه شد .');
            $('.flow_error_field').addClass('add_done')
            $('.flow_error_field').css('right', '20px');

        }, 600);

    }

    // when user click on exit on error field , error field close
    $('.remove_FEF').click(function () {

        $('.flow_error_field').css('right', '-500px');


    });

    // after 5 sec , error field hidden
    setTimeout(function(){

        $('.flow_error_field').css('right', '-500px');

    },5000);


});

// if product dosnt exist , add to card disable
if($('.NE_field').length != 0){

    $('.flow_error_field').css('display' , 'none');

}