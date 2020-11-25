// open add address modal
$('.add_address').click(function() {

    $('.AA_moda').fadeIn();
    $('body').css('overflow' , 'hidden');

    $('.AAM_close').click(function(){

        $('.AA_moda').fadeOut();
        $('body').css('overflow' , 'auto');

    })

});