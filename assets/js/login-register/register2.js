// timer

let flag = 0;
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