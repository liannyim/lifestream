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
        
        //variant pricing update
        // var variantID = $('.product-single__meta-worth').data('variant');
        var selectedVariant = '';
        var variantID = '';
        
        $(".selector-wrapper input[type=radio]").click(function() {
            selectedVariant = $(":checked").data('variant');
            $('.product-single__meta-worth').each(function( ) {
                updateVariantPricing($(this),$('.product-single__meta-worth'),selectedVariant);
            });
            $('.product-single__meta-saving').each(function( ) {
                updateVariantPricing($(this),$('.product-single__meta-saving'),selectedVariant);
            });
        });


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

    //update Variant Pricing Worth and Saving
    function updateVariantPricing($this,element,selectedVariant){
        variantID = $this.data('variant') 
        if(variantID == selectedVariant){
            element.addClass('hide');
            $this.removeClass('hide');
        }
    }

    //sticky addToCart
    $('#js-sticky-btn').click(function() {
        let variant = $(".selector-wrapper input[type=radio]:checked").data('variant');
        let qty = $('.js-product-form__item--quantity #Quantity').val();
       
        data = {
            "id": variant,
            "quantity": qty,
        }
        jQuery.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: data,
            dataType: 'json',
            success: function () {
              jQuery.getJSON('/cart.js', function (cart) {
                var styleCart = $('.js-mini-cart').attr("data-cartmini");
                    theme.miniCart.updateElements();
                    theme.miniCart.generateCart();
                    $('.js-mini-cart').removeClass('active').addClass('hide');
                    $('#jsCrosssell').addClass('show');
                    
              });
            },
            complete: function () {
                // $('.js-mini-cart').addClass('active');
            }
          });
       
    });

    $('#jsCrosssell button.close').click(function() {
        $('#jsCrosssell').removeClass('show');
    });
});