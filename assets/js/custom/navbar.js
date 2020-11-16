$('.sandwich-navbar').click(function () {

    // open sandwich navbar
    $('.right-NB').addClass('add_animation');
    $('.SN_layout').fadeIn();
    $('.right-NB').addClass('show_navbar');
    $('body').css('overflow', 'hidden');

    // product sandwich collapse
    let nav_search = $('#PDP');
    let NSH = $('#PDSN')[0].scrollHeight + 'px';

    nav_search.click(function () {

        let search_op = $(this).next();
        if (search_op.css('max-height') !== '0px') {

            search_op.css('max-height', '0px');
            nav_search.removeClass('active_collaps');

        } else {

            search_op.css('max-height', NSH);
            nav_search.addClass('active_collaps');

        }

    });

    // when user click on exit or click out side of sandwich nav bar , close navbar
    $('.close_SN , .SN_layout').click(function () {

        $('.SN_layout').fadeOut();
        $('body').css('overflow', 'auto');
        $('.right-NB').removeClass('show_navbar');

        setTimeout(function () {

            $('.right-NB').removeClass('add_animation');

        }, 700);

        // if product collaps will open and user close the navbar , and then open it , collaps will be clos
        $('#PDSN').css('max-height', '0px');
        $('#PDP').removeClass('active_collaps');

    });

});