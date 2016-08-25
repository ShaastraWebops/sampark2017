$(document).ready(function(){
	$(this).scrollTop(0);
});

var checkMenubarPosition = function(){
	if($('#menus').innerHeight() + $('#menus').offset().top > $('.content').first().position().top) { /*Condition for menu bar to reach bottom of the image */
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

/* Smooth Anchor Scroll*/
$(document).on('click', '.navigator', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

