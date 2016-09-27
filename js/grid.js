$(document).ready(function() {
/*	
$('a').click(function() {
	alert('This link is under processing.' + '\n' + 'Please try again later.')
});
*/

/*-----------------------------------*/

$('.uList li ').click(function(){
	$('.uList li').removeClass("active");
    $(this).addClass("active");
});


$('#hearts_click').one('click',function () {
	var count = $('#hearts_count').text();
	var newCount = parseInt(count);
	var test = 1;
	var result = newCount + test;
	$('#hearts_count').text(result);
	$(this).css({backgroundImage:'url(img/prod_heart_green.png)'})


});



$('.cont_change ul a li').on('click', function(){
$(this).addClass('active_page').parent().siblings().find('li').removeClass('active_page');
});










});