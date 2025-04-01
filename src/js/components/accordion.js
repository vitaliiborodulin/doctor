// $('.accordion__item:first-child').find('.accordion__header').addClass('active');
// $('.accordion__item:first-child').find('.accordion__body').show();

$('.question').on('click', function () {
    const answer = $(this).next();

    if (!$(this).hasClass('active')){
        $('.question').removeClass('active');
        $('.answer').slideUp(300);
        $(this).addClass('active');
        answer.slideDown(300);
    } else {
        $(this).removeClass('active');
        answer.slideUp(300);
    }
});