$('.plus').click(function () {

    $(this).parent().children('p').text(parseInt($(this).parent().children('p').text()) + 1);

    // add 'p' value to input value attr
    $(this).parent().children('input').attr('value' , parseInt($(this).parent().children('p').text()))

});

$('.negetive').click(function () {

    
    if(parseInt($(this).parent().children('p').text()) <= 1){
        
        return
        
    }else{
        
        $(this).parent().children('p').text(parseInt($(this).parent().children('p').text()) - 1);
        
        // add 'p' value to input value attr
        $(this).parent().children('input').attr('value' , parseInt($(this).parent().children('p').text()))

    }

});

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
    if(inp_val[0] == '' || inp_val[1] == ''){

        error_text.text('لطفا تمام فیلد ها را پر کنید .');
        $('.error_handler').css('display' , 'flex');
        e.preventDefault();

    // check phone number value
    }

});

// if user click on remove product btn , open confirm modal
// var $RG = $('.remove_goods');

// $RG.click(function(){

//     $(this).att('')

// })