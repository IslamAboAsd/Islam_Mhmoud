/*global $, alert, console */

var myHeader = $('header');
  

$(function () {
    "use strict";
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        myHeader.each(function () {
            $(this).css('paddingTop', ($(window).height() -  myHeader.height()) / 2);
        });

    });
    $('nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    
    $('.top-service .main li a').click(function () {
        
        $('#' + $(this).data('value')).show(10, function () {
            
            $(this).siblings().not(this).hide(-200);
        });
    });
    
    

    $('.top-service .main li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    
    
    (function autoSlider() {
       
        $('.testmonails .auto-slider .activee').each(function () {
             
            if (!$(this).is(':last-child')) {
               
                $(this).delay(4000).fadeOut(1000, function () {
               
                    $(this).removeClass('activee').next().addClass('activee').fadeIn();
                   
                    autoSlider();
                 
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('activee');
                    $('.testmonails .auto-slider div').eq(0).addClass('activee').fadeIn();
                    
                    autoSlider();
                });
            }
           
           
        });
       
    }());
});