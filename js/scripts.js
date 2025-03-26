$(function() {

    // burger
    const burger = $('.burger');
    const menu = $('.header__menu');
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('burger-close');
        // menu.toggleClass('open').toggle(300);
        // $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            // menu.removeClass('open');
            burger.removeClass('burger-close');
            // $('html, body').removeClass('overflow');
        }
    });
    
    
    // submenu
    // $('.header__menu .menu-item-has-children > a').on('click', function(e) {
    // 	e.preventDefault();
    // });
    
    // var submenu =  $('.header__menu .sub-menu');
    // var menuChildren = $('.header__menu .menu-item-has-children');
    
    
    // menuChildren.on('click', function() {
    	
    // 	if ($(this).hasClass('active')){
    // 			$(this).removeClass('active');
    // 			$(this).find('.sub-menu').removeClass('open').slideUp();
    // 	} else {
    //             menuChildren.removeClass('active');
    //             menuChildren.find('.sub-menu').removeClass('open').hide()
    // 			$(this).addClass('active');
    // 			$(this).find('.sub-menu').addClass('open').slideDown();
    // 	}
    
    // });
    
    // $(document).on('click', function (e) {
    // 	if (!$('.header__menu .menu-item-has-children a').is(e.target) ){
    // 			menuChildren.removeClass('active');
    // 			submenu.removeClass('open').hide();
    // 	}
    // });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    // $('input[name="birth"]').mask("99.99.9999");
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
    // $('[data-fancybox]').fancybox({
    //     // thumbs : { autoStart:true },
    //     toolbar: "auto",
    //     infobar: true,
    //     smallBtn: "auto",
    //     protect: true,
    //     loop: true,
    //     iframe : {
    //         preload : false
    //     }
    // });
    
    $('.popup-link').fancybox({
        // thumbs : { autoStart:true },
        toolbar: "auto",
        infobar: true,
        smallBtn: "auto",
        protect: true,
        loop: true,
        iframe : {
            preload : false
        },
        closeExisting : true
    });
    
    // $('#sendback .popup-link').on('click', function(){
        
    // });

});