// open add address modal
$('.new_address div').click(function() {

    $('.AA_moda').fadeIn();
    $('body').css('overflow' , 'hidden');

    $('.AAM_close').click(function(){

        $('.AA_moda').fadeOut();
        $('body').css('overflow' , 'auto');

    })

});

// chose day zone
$('.send_day .PD_chose_box div').click(function(){

    $('.send_day .PD_chose_box div').removeClass('active_pill');
    $(this).addClass('active_pill');

});

// chose time zone
$('.send_time .PD_chose_box div').click(function(){

    $('.send_time .PD_chose_box div').removeClass('active_pill');
    $(this).addClass('active_pill');

});