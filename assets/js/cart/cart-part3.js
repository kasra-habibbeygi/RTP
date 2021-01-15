$('.check_valid').click(function (e) {

    let error_text = $('.error_handler .error_content p');

    if ($('#PM-1').is(":checked") == false && $('#PM-2').is(":checked") == false) {

        error_text.text('لطفا یکی از روش های پرداخت زیر را انتخاب کنید .');
        $('.error_handler').css('display' , 'flex');
        e.preventDefault();

    }

});


$('.plus').click(function () {

    $('.pr_counter p').text(parseInt($('.pr_counter p').text()) + 1);

});

$('.negetive').click(function () {

    
    if(parseInt($('.pr_counter p').text()) - 1 < 0){
        
        return
        
    }else{
        
        $('.pr_counter p').text(parseInt($('.pr_counter p').text()) - 1);

    }

});

