// open add address modal
$('.new_address div').click(function () {

    $('.AA_moda').fadeIn();
    $('body').css('overflow', 'hidden');

    $('.AAM_close').click(function () {

        $('.AA_moda').fadeOut();
        $('body').css('overflow', 'auto');

    });                                       

    // if user click out of modal , modal will be closed
    $(window).click(function(e){

        if( $(e.target).attr('class') == 'AA_flex'){

            $('.AA_moda').fadeOut();
            $('body').css('overflow', 'auto');

        }

    });

});



// // chose day zone
// $('.send_day .PD_chose_box div').click(function () {

//     $('.send_day .PD_chose_box div').removeClass('active_pill');
//     $(this).addClass('active_pill');

// });

// // chose time zone
// $('.send_time .PD_chose_box div').click(function () {

//     $('.send_time .PD_chose_box div').removeClass('active_pill');
//     $(this).addClass('active_pill');

// });

// when user chose express , display field of time and user can chose one of them
// when user chose post , do nothing

// $('.inp-cbx').change(function () {

//     if ($('#PM-1').is(":checked")) {

//         $('.time_field').slideDown()

//     }

//     if($('#PM-2').is(':checked')){

//         $('.time_field').slideUp();

//     }

// });

// form validation

$('.check_valid').click(function (e){

    let inp_count = $('form div .valid').length;
    let inp_val = [];
    let error_text = $('.error_handler .error_content p');
    
    // get input value and push them into the inp_val array
    for(let i = 0 ; i < inp_count ; i++){
    
        inp_val.push($('form div .valid').eq(i).val());
    
    }
    
    // check if inp is empty
    if(inp_val[0] == '' || inp_val[1] == '' || inp_val[2] == '' || inp_val[3] == ''){

        error_text.text('لطفا تمام فیلد ها را پر کنید .');
        $('.error_handler').css('display' , 'flex');
        e.preventDefault();

         
    }

});
