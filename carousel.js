$(document).ready(function(){
    $("#owl-one").owlCarousel({
        items: 3,
        loop: true,
        dotsEach: true,
        autoplay: true,
        responsiveClass:true,

        responsive:{

            0:{
    
                items:1
    
            },
    
            600:{
    
                items:1
    
            },
    
            1000:{
    
                items:3,
    
                loop:true
    
            }
    
        }
    });

    $("#owl-two").owlCarousel({
        items: 1,
        loop: true,
        dotsEach: true,
        autoplay: true
    });
});

