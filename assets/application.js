// Put your application javascript here
$(document).ready(function () {
    if ($('body').hasClass("template-product")) {
        
        if($('.product__value-props li').length > 0){
            //append values props to PDP product desc 
            $('.product__value-props').insertBefore('#accordion').removeClass('hide');
            
            //spaced out value props if there are four or more values on a page
            if($('.product__value-props li').length >= 4){
                $('.product__value-props').css("justify-content","space-between");
            }
        }
        //sticky-cart will slides up when reached end of main product div
         var heightThreshold_end  = $(".product-single").height();
        
         $(window).scroll(function() {
             var scroll = $(window).scrollTop();

             if (scroll >=  heightThreshold_end ) {
                 $('.sticky-cart-wr').addClass('active');
             } else {
                 $('.sticky-cart-wr').removeClass('active');
             }
         });
    }
});