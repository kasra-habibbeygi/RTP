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


// if user click on remove product btn , open confirm modal
var $RG = $('.remove_goods');

$RG.click(function(){

    // fade in
    $('.card_confirm').fadeIn();

    // fade out
    $('.card_confirm .no').click(function(){

        $('.card_confirm').fadeOut();

    });

    var data_title = $(this).attr('data-title');
    var data_memory = $(this).attr('data-memory');
    var data_color = $(this).attr('data-color');
    var data_url = $(this).attr('data-url');

    if(data_memory == ''){

        $('.confiem_content p').text(`ایا مطمئن هستید که میخواهید ${data_title} با رنگ ${data_color} از سبد خرید شما حذف شود ؟`);

    }else{


        $('.confiem_content p').text(`ایا مطمئن هستید که میخواهید ${data_title} با حافظه داخلی ${data_memory} و رنگ ${data_color} از سبد خرید شما حذف شود ؟`);

    }


    $('#CC_yes').attr('href' , data_url);

});

$('.product_summary_field').first().css('border' , 'none');