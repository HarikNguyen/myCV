

 (function ($) {
    // Start of use strict
    'use strict';
    // 1.0 Menu toggle
    $('#menu-mobile').on('click', function(){
        var menuIcon = $('#menu-mobile__icon');
        console.log("clicked");
        if(menuIcon.hasClass('fa-bars')){
            console.log("open");
            menuIcon.toggleClass('fa-bars fa-xmark');
            menuIcon.css({"color":"var(--danger-color)"});
            $('.cv-header').addClass('showMenuMobile');
        }
        else{
            menuIcon.toggleClass('fa-xmark fa-bars');
            menuIcon.css({"color":"var(--primary-color)"});
            $('.cv-header').removeClass('showMenuMobile');
        }
    });
    // // 2.0 Add avatarto banner
    // // 2.01 when resize
    $(window).resize(function() {
        var width = $(window).width();
        if(width <= 968 && $('.cv-intro__info .cv-header__info-avt').length == 0){
            var avt = "<div class=\"cv-header__info-avt\"></div>";
            $('.cv-intro__info').prepend(avt);
            $('.cv-intro__info .cv-header__info-avt').addClass('avt-res');
        }
        if(width > 968 && $('.cv-intro__info .cv-header__info-avt').length != 0){
            $('.cv-intro__info .cv-header__info-avt').remove();
        }
    });
    
    // 3.0 rearrange button
    $(window).resize(function() {
        var width = $(window).width();
        var downloadCVButtonElement = "<a href=\"#\" class=\"cv-section__about-me-intro-download-resume btn btn-primary\"><span class=\"btn__content\"><i class=\"fa-solid fa-file-arrow-down cv-section__about-me-intro-download-resume-icon\"></i> Download my CV</span></a>";
        if(width <= 624){
            // 3.01 rearrange button
            $('.cv-intro__info-btn-to-link').css({"flex-direction":"column"});
            $('.cv-intro__info-to-resume').css({"margin-left": 0, "margin-top": "1.6rem"});
            // 3.02 change position download cv button
            $('.cv-section__about-me-intro-description').css({"margin-bottom": "1.2rem"});
            // $(".cv-section__about-me-personal-info .row").append(downloadCVButton)
            // $(".cv-section__about-me-personal-info .row").append("<p>adadf</p>")
            // $('.cv-section__about-me-intro-download-resume').remove()

        }
        else{
            $('.cv-intro__info-btn-to-link').removeAttr('style');
            $('.cv-intro__info-to-resume').removeAttr('style');
            // $('.cv-section__about-me-intro-download-resume').remove()
            // $('.cv-section__about-me-intro').append(downloadCVButton)
        }
    });

    // 4.0 scroll step (one page nav)
    function scrollToSection(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        try{
            var $section = $(href);
            $('html, body, .wrapper').animate({
                scrollTop: $section.offset().top - $('#home').offset().top
            }, 1000);
        }catch(error){
            window.location.assign(href);
        };
    }
    $('#navigation [data-scroll]').on('click', scrollToSection);

    $('.wrapper').scroll(function(){
        var activeID;
        // get section is active in wrapper
        $('section').each(function(){
            var sectionPositionTop = $(this).offset().top - $('#home').offset().top;
            if($('.wrapper').scrollTop() >= sectionPositionTop){
                activeID = $(this).attr('id');
            }
        });
        var currentActiveID = $('#navigation [data-scroll].active').attr('href');
        console.log(activeID)
        if(currentActiveID !== '#' + activeID){
            $('#navigation [data-scroll].active').removeClass('active');
            $("#navigation [data-scroll][href$='#"+activeID+"']").addClass('active');
            console.log('1');
        }
        
    });

    $('.wrapper').on('click', '.to-about-me', function () {
        $('.cv-header__nav-list-item [href="#about-me"]').trigger('click');
    }); 
    $('.cv-header__nav-hire-me').on('click', '.to-contact', function () {
        $('.cv-header__nav-list-item [href="#contact"]').trigger('click');
    }); 
    
})(jQuery);

