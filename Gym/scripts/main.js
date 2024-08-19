$(function() {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})


$(window).scroll(function () { 
    let position = $(this).scrollTop();
    if (position > 200) {
        $('.nav-menu').addClass('custom-navbar');
    }
    else $('.nav-menu').removeClass('custom-navbar');
});

$(window).scroll(function () { 
    let position = $(this).scrollTop();
    if (position > 700) {
        $('.award-text').addClass('from-right');
        $('.award-img').addClass('from-left');
    }
    else {
        $('.award-text').removeClass('from-right');
        $('.award-img').removeClass('from-left');
    }
});


$(".gallery-list-item").click(function () { 
    let cat = $(this).attr('data-filter');
    $(this).addClass("active-item").siblings().removeClass("active-item");
    if(cat === "all"){
        $('.filter').show(300);
    }
    else{
        $('.filter').not('.' + cat).hide(300);
        $('.filter').filter('.' + cat).show(300);
    }
});


$(window).scroll(function () { 
    let position = $(this).scrollTop();
    if (position > 4400) {
        $('.card-1').addClass('moveFromRight');
        $('.card-2').addClass('moveFromBottom');
        $('.card-3').addClass('moveFromLeft');
    }
    else {
        $('.card-1').removeClass('moveFromRight');
        $('.card-2').removeClass('moveFromBottom');
        $('.card-3').removeClass('moveFromLeft');
    }
});