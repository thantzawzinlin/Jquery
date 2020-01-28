$(function () {
    // $('.greenbox').click(function () {
    //     $(this).fadeTo(1000, 0).delay(1000).fadeTo(1000, 1)
    // })
    $('.redbox,.bluebox,.greenbox').click(function () {
        $(this).animate({
            marginLeft: '+200px',
            borderRadius: '50%'
        }, 1000).animate({
            marginLeft: '-50px',

        });
        // $('.redbox,.bluebox,.greenbox').animate({
        //     marginLeft: '-50px'


        // }, 1000)
    })
});