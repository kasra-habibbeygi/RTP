$('.plus').click(function () {

    $('.pr_counter p').text(parseInt($('.pr_counter p').text()) + 1);

});

$('.negetive').click(function () {

    
    if(parseInt($('.pr_counter p').text()) - 1 < 0){
        
        return
        
    }else{
        
        $('.pr_counter p').text(parseInt($('.pr_counter p').text()) - 1);

    }

});

