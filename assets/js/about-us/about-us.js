

$(document).ready(function (){
    function counter(clas, start, end, duration) {
        let obj = $(clas).text(),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(function ()  {
                current += increment;
                $(clas).text(current)
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    let count = $('.counter');
    for (let i=0; i<count.length ; i++){
        let endCounter=count.eq(i).text();
        counter(".counter", 0, endCounter, 3000);
    }

});