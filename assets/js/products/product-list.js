$('#OPF').click(function(){

    $('.main_filter_field').fadeIn();
    $('body').css('overflow' , 'hidden');

    $('.close_FF').click(function(){

        $('.main_filter_field').fadeOut();
        $('body').css('overflow' , 'auto');

    });

});