let count = $('.counter');

for (let i = 0; i < count.length; i++) {

    let endCounter = parseInt(count.eq(i).text());

    counter(count.eq(i), 0, endCounter, 30);

}

function counter(clas, start, end, duration) {

    let counter = start;
    let timer = setInterval(function () {

        counter += 1;
        clas.text(counter);


        if (counter >= end) {

            clearInterval(timer);

        }

    }, duration);

}