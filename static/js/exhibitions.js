$(document).ready(function() {
	$('.button-collapse').sideNav();
	$('html').removeClass('preload');
	$('.scrollspy').scrollSpy({
		offsetTop: 250
	});
});