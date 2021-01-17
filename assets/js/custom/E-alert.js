var $RG = $('.remove_goods');
$RG.click(function(){

    // fade in
    $('.exit_confirm').fadeIn();

    // fade out
    $('.exit_confirm .no').click(function(){

        $('.exit_confirm').fadeOut();

    });

});