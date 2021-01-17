// timer
let flag = 0;

// validation
$('.check_valid').click(function (e) {

    let inp_count = $('form div .valid').length;
    let inp_val = [];
    let error_text = $('.error_handler .error_content p');


    // get input value and push them into the inp_val array
    for (let i = 0; i < inp_count; i++) {

        inp_val.push($('form div .valid').eq(i).val());

    }

    if (flag == 0) {

        if (inp_val[0] == '' || inp_val[1] == '') {

            error_text.text('لطفا تمام فیلد ها را پر کنید .');
            $('.error_handler').css('display', 'flex');
            e.preventDefault();

        }

    } else {

        return false;

    }

});

// timer
var timer = setInterval(() => {

    var sec = parseInt($('.timer_field #sec').text());
    var min = parseInt($('.timer_field #min').text());

    if (sec !== 00) {

        $('.timer_field #sec').text(sec - 1);


    } else if (sec === 0 && min === 0) {

        $('.error_handler').css('display', 'flex');
        $('.error_handler p').html('زمان شما به اتمام رسیده است ، برای دریافت کد مجدد <a href=""> اینجا </a> کلیک کنید .');
        clearInterval(timer);
        flag = 1;

    } else {

        $('.timer_field #min').text(min - 1);
        $('.timer_field #sec').text(59);

    }

}, 1000);