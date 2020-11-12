

$(document).ready(function (){
    function counter(clas, start, end, duration) {
        let obj = $(clas),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.text = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }

    counter(".counter", 0, 300, 3000);
});