$(document).ready(function(){

	var pLeftDD1 = parseInt($('#m1').position().left) - 200; /*200 is random, so that it comes to the center*/
	$('#ddM1').css('padding-left', pLeftDD1);

	var pLeftDD3 = parseInt($('#m3').position().left) - 200; /*For Menu3*/
	$('#ddM3').css('padding-left', pLeftDD3);

});

var checkMenubarPosition = function(){
	if($('#menus').innerHeight() + $('#menus').offset().top > $('#videoOpen').height()) { /*Condition for menu bar to reach bottom of the image */
		$('.menus').addClass('menusDown'); /*Color changes*/
		$('.menu').addClass('menuDown');
		$('.ddElement').addClass('ddElementDown');
		$('.dropDownMenu').addClass('dropDownMenuDown');
		$("#shaastraLogoWhite").css("display", "none");
		$("#shaastraLogoBlack").css("display", "inline-block");
	} else {
		$('.menus').removeClass('menusDown'); /*reverting*/
		$('.menu').removeClass('menuDown');
		$('.ddElement').removeClass('ddElementDown');
		$('.dropDownMenu').removeClass('dropDownMenuDown');
		$("#shaastraLogoBlack").css("display", "none");
		$("#shaastraLogoWhite").css("display", "inline-block");
	}
};

$(window).scroll(checkMenubarPosition);

