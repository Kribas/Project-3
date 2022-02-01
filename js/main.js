$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("header-scrolled");
    } else {
        
       $(".header").removeClass("header-scrolled");
    }
});

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});