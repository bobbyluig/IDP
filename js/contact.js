$(document).ready(function() {
	$('.button-collapse').sideNav();
	$('html').removeClass('preload');
	
	$('form').submit(function() {
		 form = $(this);
		$('button', form).toggleClass('disabled waves-effect waves-light').attr('disabled', true);
	
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function(data) {
					Materialize.toast(data.message, data.message.length * 150);
					setTimeout(function() {
						$('button', form).toggleClass('disabled waves-effect waves-light').attr('disabled', false);
					}, 500);
				}
		});
		return false;
	});	
});