$(function() {

    // burger
    const burger = $('.burger');
    const menu = $('.header__menu');
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('burger-close');
        menu.toggleClass('open').toggle(300);
        $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            menu.removeClass('open');
            burger.removeClass('burger-close');
            $('html, body').removeClass('overflow');
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
    // $('input[type="tel"]').mask("+7 (999) 999-99-99");
    // $('input[name="birth"]').mask("99.99.9999");
    var num = $(".number");
    num.each(function(indx, el) {
        var max = $(el).data("max");
        var duration = 2000;
        var visibility = checkViewport(el);
        $(el).on("animeNum", function() {
            $({n: 0}).animate({n: max}, {
                easing: "linear",
                duration: duration,
                step: function(now, fx) {
                    $(el).html(now | 0)
                }
            })
        }).data("visibility", visibility);
        visibility && $(el).trigger("animeNum")
    });
    
    function checkViewport(el) {
    var H = document.documentElement.clientHeight,
        h = el.scrollHeight,
        pos = el.getBoundingClientRect();
        return pos.top + h > 0 && pos.bottom - h < H
    }
    $(window).scroll(function() {
        num.each(function(indx, el) {
            var visibility = checkViewport(el);
            el = $(el);
            var old = el.data("visibility");
            old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
        })
    })
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
    var options = {
        valueNames: [ 'care', 'money' ]
      };
      
      var priceList = new List('price-list', options);
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