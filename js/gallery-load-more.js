$(document).ready(function () {
    $('.gallery img:lt(5)').show();
    $('.less').hide();
    var items =  9;
    var shown =  8;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery img:visible').size()+8;
        if(shown< items) {$('.gallery img:lt('+shown+')').show(300);}
        else {$('.gallery img:lt('+items+')').show(300);
             $('.more').hide();
             }
    });
    $('.less').click(function () {
        $('.gallery img').not(':lt(3)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});