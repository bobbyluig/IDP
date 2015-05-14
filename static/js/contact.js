$(document).ready(function() {
	$('.button-collapse').sideNav();
	$('html').removeClass('preload');
	
	$('form').submit(function() {
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function(data) {
					Materialize.toast(data.message, data.message.length * 150);
				}
		});
		return false;
	});	
});