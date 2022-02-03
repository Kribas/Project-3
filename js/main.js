(function() {
    "use strict";

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("header-scrolled");
        } else {
            
           $(".header").removeClass("header-scrolled");
        }
    });

    $(document).ready(function() {
        $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
        });
    })
    
   
    
    
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    
    
    const portfolioDetailsLightbox = GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh'
      });
})()


