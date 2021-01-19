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

// when user click on edit , value in table goes in input and user can edit address


$('.edit_address').click(function(){

    $('.add_form input').eq(0).val($(this).parent().parent().children('td:nth-child(3)').text());
    $('.add_form input').eq(1).val($(this).parent().parent().children('td:nth-child(4)').text());
    $('.add_form input').eq(2).val($(this).parent().parent().children('td:nth-child(5)').text());
    $('.add_form input').eq(3).val($(this).parent().parent().children('td:nth-child(6)').text());

    let $checkvalid0 = $(this).parent().parent().children('td:nth-child(3)').text();
    let $checkvalid1 = $(this).parent().parent().children('td:nth-child(4)').text();
    let $checkvalid2 = $(this).parent().parent().children('td:nth-child(5)').text();
    let $checkvalid3 = $(this).parent().parent().children('td:nth-child(6)').text();

    $('.check_address').click(function(e){

        if($('.add_form input').eq(0).val() == $checkvalid0 && $('.add_form input').eq(1).val() == $checkvalid1 && $('.add_form input').eq(2).val() == $checkvalid2 && $('.add_form input').eq(3).val() == $checkvalid3){

            if($('.valid').eq(4).val() == ''){
                
                error_text.text('لطفا تمام فیلد ها را پر کنید .');
                $('.error_handler').css('display' , 'flex');
                e.preventDefault();

            }
            else{

                error_text.text('هنوز تغییری ایجاد نشده است .');
                $('.error_handler').css('display' , 'flex');
                e.preventDefault();

            }
            

        }
    
    });

});