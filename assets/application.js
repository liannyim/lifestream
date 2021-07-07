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
        
    }
});