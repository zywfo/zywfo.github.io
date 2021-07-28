$(document).ready(function(){

    
    $('.gobtn').mouseover(function(){
        $('.cover').css('backdrop-filter','blur(20px)').css('transition','0.2s ease');
    });
    $('.gobtn').mouseleave(function(){
        $('.cover').css('backdrop-filter','');
    });
})