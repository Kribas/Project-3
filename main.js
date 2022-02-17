(function() {
    "use strict";

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("header-scrolled");
        } else {
            
           $(".header").removeClass("header-scrolled");
        }
    });

    $(document).ready(function(){
    $(".work-filter-list").isotope();

	$(".work-filter li").on('click', function(){
        $('.work-filter ul li').removeClass('active');
            $(this).addClass('active');
	    var selector = $(this).attr('data-filter');
	    $(".work-filter-list").isotope({
	        filter:selector
	    });
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


      /**
   * Back to top button
   */
       $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".back-to-top").addClass("active");
        } else {
            
           $(".back-to-top").removeClass("active");
        }
    });
    
})()


