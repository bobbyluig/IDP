$(document).ready(function() {
	$('html').removeClass('preload');
	$('.button-collapse').sideNav();
	$('.slider').slider({
		height: 500,
		interval: 5000,
	});
});