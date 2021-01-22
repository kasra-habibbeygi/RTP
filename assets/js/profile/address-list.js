let error_text = $('.error_handler .error_content p');
$('.check_valid').click(function (e){

    let inp_count = $('form div .valid').length;
    let inp_val = [];
    
    // get input value and push them into the inp_val array
    for(let i = 0 ; i < inp_count ; i++){
    
        inp_val.push($('form div .valid').eq(i).val());
    
    }
    
    // check if inp is empty
    if(inp_val[0] == '' || inp_val[1] == '' || inp_val[2] == '' || inp_val[3] == '' || inp_val[4] == ''){

        error_text.text('لطفا تمام فیلد ها را پر کنید .');
        $('.error_handler').css('display' , 'flex');
        e.preventDefault();

    // check phone number value
    }

});

// open remove modal
$('.remove_tr').click(function(){

    $('.RR_modal').fadeIn();

    let dataUrl = $(this).attr('data-url');

    $('.RR_modal .main_field .yes').attr('href' , dataUrl);

    $('.RR_modal .no').click(function(){

        $('.RR_modal').fadeOut();

    })

});