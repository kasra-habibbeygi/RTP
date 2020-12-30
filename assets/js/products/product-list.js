$('#OPF').click(function () {

    $('.main_filter_field').fadeIn();
    $('body').css('overflow', 'hidden');

    $('.close_FF').click(function () {

        $('.main_filter_field').fadeOut();
        $('body').css('overflow', 'auto');

    });

});

// if user in mobile size open and close filter and then resize browser to higher than 1050
// the filter display is none , blow code fix this
$(window).resize(function () {

    if ($(window).width() > 1050) {

        $('.main_filter_field').fadeIn();

    }

});

// sticky navbar
$(document).scroll(function () {

    var scroll = $(this).scrollTop();

    if ($(window).width() < 1050) {

        if (scroll > 80) {

            $('.filter_navbar').addClass('sticky_filter');

        } else {

            $('.filter_navbar').removeClass('sticky_filter');

        }

    }
});


$('.pagination_ul .enable').click(function (event) {

    event.preventDefault();

});