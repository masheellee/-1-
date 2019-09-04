$('.my-button').click(function() {

    let styleAttr = $('.nav').attr('style'); 

    if ( styleAttr == undefined) {
        $('.nav').css('right', '0%');
        $('.nav').css('transition', '0.5s');
        $('.stick2').css('display', 'none');
        $('.stick1').css('transform','rotate(-45deg)');
        $('.stick1').css('top','15px');
        $('.stick3').css('transform','rotate(45deg)');

    }else{
        $('.nav').removeAttr('style');
        $('.stick1').removeAttr('style');
        $('.stick2').removeAttr('style');
        $('.stick3').removeAttr('style');
    }
});

let counter = 1;

$('.arrow-right').click(function() {

    if (counter == $('.picture').length-1) {
        $('.slider').animate({
            'left': -100 * counter + '%'
        },150, function() {
            $('.slider').css('left', '0');
        });
        $('#color1').attr('fill', 'black');

        counter = 1;

    }else {
        $('.slider').animate({
            'left': -100 * counter + '%'
        },150);
        $('#color1').attr('fill', '#26a1e4');

        counter++;
    }
});

$('.arrow-left').click(function(){ 
    
    if (counter == 2 || counter == 0 ) {
        counter--;
        $('.slider').animate({
            'left': -100 * (counter-1) + '%'
        },150, function() {
            $('.slider').css('left', '-400%');
        });
        $('#color2').attr('fill', 'black');

    }else if(counter == 1 || counter == 5 ){
        $('.slider').animate({
            'left':-100 * (4) +'%'
        },0);
        $('.slider').animate({
            'left':-100 * (3) +'%'
        },150);
        counter=4;
    } else {
        counter--;
        
        $('.slider').animate({
            'left':-100 * (counter-1) +'%'
        },150);
    } 
});
