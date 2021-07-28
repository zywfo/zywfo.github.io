$(document).ready(function(){
    setTimeout(function(){
        $('.load-wrapper').hide();
    },4300)
    
    $('audio').prop('volume',0.5);
    $('#mute').click(function(){
        $('audio').prop('volume',0.0);
    });
    $('#menubtn').click(function(){
        $("#menu").css('right','1%').css('width','99%').css('animation-play-state','running');
        $(this).hide(500); 
        $('.animating>div,.logo>h2').css('animation-play-state','paused');
        $('#menubackbtn').css('display','block');
        $('#menu>ul').css('display','block');
        $('#homepage').css('filter','grayscale(90%)');
        
    });
    $('#menubackbtn,#homebtn,#aboutbtn').click(function(){
        $("#menu").css('right','').css('width','').css('animation-play-state','');
        $('#menubackbtn').css('display','');
        $('#menubtn').show(500);
        $('.animating>div,.logo>h2').css('animation-play-state','');
        $('#menu>ul').css('display','');
        $('#homepage').css('filter','');
    });
})