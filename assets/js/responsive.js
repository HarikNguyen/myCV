// 1.0 add avt
document.addEventListener('DOMContentLoaded', showMobildAvt);
function showMobildAvt(){
    var avt = "<div class=\"cv-header__info-avt\"></div>";
    if(window.innerWidth <= 968 && $('.cv-intro__info .cv-header__info-avt').length == 0){
        // delete avt from header
        $('.cv-intro__info').prepend(avt);
        $('.cv-intro__info .cv-header__info-avt').addClass('avt-res');
        // add
    }
    else if (window.innerWidth > 968 && $('.cv-intro__info .cv-header__info-avt').length != 0){
        $('.cv-intro__info .cv-header__info-avt').remove();
    }
    // window.innerWidth()
};
// 2.0 rearrange button
document.addEventListener('DOMContentLoaded', rearrangeBtn);
function rearrangeBtn(){
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
}