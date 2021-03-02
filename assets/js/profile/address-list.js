
// open remove modal
$('.remove_tr').click(function(){

    $('.RR_modal').fadeIn();

    let dataUrl = $(this).attr('data-url');

    $('.RR_modal .main_field .yes').attr('href' , dataUrl);

    $('.RR_modal .no').click(function(){

        $('.RR_modal').fadeOut();

    })

});