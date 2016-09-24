function isViewport($el) {
	H = $(window).height();
	t = $el[0].getBoundingClientRect().top;
	return (H-t);
}

$(window).on("scroll resize load", function() {
	$(".animateElement").each(function() {
    	if(isViewport($(this)) > 0) {
			$(this).addClass("animate");
		}
	});
});
