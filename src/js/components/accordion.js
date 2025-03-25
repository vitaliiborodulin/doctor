$('.accordion__item:first-child').find('.accordion__header').addClass('active');
$('.accordion__item:first-child').find('.accordion__body').show();

$('.accordion__header').on('click', function () {
    const accBody = $(this).next();

    if (!$(this).hasClass('active')){
        $('.accordion__header').removeClass('active');
        $('.accordion__body').slideUp(300);
        $(this).addClass('active');
        accBody.slideDown(300);
    } else {
        $(this).removeClass('active');
        accBody.slideUp(300);
    }
});


$('.filter-btn').on('click', function () {
    const filter = $('.filter');

    if (!filter.hasClass('active')){
        filter.addClass('active');
        filter.slideDown(300);
    } else {
        filter.removeClass('active');
        filter.slideUp(300);
    }
});