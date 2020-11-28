$('.reply_field').click(function(){

    $('.reply_modal').fadeIn()
    $('body').css('overflow' , 'hidden');

    $('.reply_modal_close').click(function(){

        $('.reply_modal').fadeOut()
        $('body').css('overflow' , 'auto');

    })

})