$(document).ready(function() {
	
/*-----------------------------*/

$('#Lbut').click(function() { 
	$('#but').css('background-image','url(img/leftShopClick.png)')
});

$('#Rbut').click(function() { 
	$('#but').css('background-image','url(img/rmoneyClicked.png)')
});

/*-----------------------------------*/

$('.uList li ').click(function(){
	$('.uList li').removeClass("active");
    $(this).addClass("active");

});


});