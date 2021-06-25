$(document).ready(function(){
    $('audio').prop('volume',0.25);
    
    $('#menubtn').click(function(){
        $("#menu").css('right','1%').css('width','99%').css('animation-play-state','running');
        $(this).hide(); 
        $('.animating>div,.logo>h2').css('animation-play-state','paused');
        $('#menubackbtn').css('display','block');
        $('#menu>ul').css('display','block');
        
    });
    $('#menubackbtn,#homebtn').click(function(){
        $("#menu").css('right','').css('width','').css('animation-play-state','');
        $('#menubackbtn').css('display','');
        $('#menubtn').show();
        $('.animating>div,.logo>h2').css('animation-play-state','');
        $('#menu>ul').css('display','');
    });
})