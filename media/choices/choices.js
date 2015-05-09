var scenes = {
	s0: {
		text: 'Make your section. Do it wisely.', 
		choices: [
			{text: 'Choice 1', next: function() { return scenes.s1 } },
			{text: 'Choice 2', next: function() { return scenes.s1 } },
			{text: 'Choice 3', next: function() { return scenes.s1 } },
			{text: 'Choice 4', next: function() { return scenes.s1 } },
		]
	},
	s1: {
		text: 'You have chosen. Now choose again.', 
		choices: [
			{text: 'Choice 1', next: function() { return scenes.s0 } },
			{text: 'Choice 2', next: function() { return scenes.s0 } },
			{text: 'Choice 3', next: function() { return scenes.s0 } },
		]
	},
};

var current = null;
var slide = 0;

function new_scene(first) {
	if (first) {
		$('#home').fadeOut(1000, function() {
			$('.et-wrapper').fadeIn();
			vertical_align();
		});
		nextslide = $('.et-page-current');
	} else {
		nextslide = $('.et-page[id!="home"]:not(.et-page-current)').first();
	}
	
	slide = (slide === 0 && !first) ? 1 : 0;
	nextslide.find('p').text(current.text);
	con = nextslide.find('.row');
	con.empty();
	
	for (var i=0; i<current.choices.length; i++) {
		$('<div class="col s12"><button class="btn" data-choice="' + i + '">' + current.choices[i].text + '</button></div>').appendTo(con);
	}
	
	if (!first) {
		PageTransitions.animate($('.et-wrapper'));
		vertical_align();
	}
}

function vertical_align() {
	var win = $(this);
	var con = $($('.et-wrapper div').find('.container')[slide]);
	if (win.height() >= con.height()) {
		var div = $($('.et-wrapper div').find('.container')[slide]);
		div.css('margin-top',(div.parent().height() - div.height())/2 + 'px');
	}
	else if ($(document).height() > win.height()) {
		con.css('margin-top', '0px');
	}
}

$(document).ready(function() {
	var div = $('#home');
	div.css('margin-top',(div.parent().height() - div.height())/2 + 'px');
	vertical_align();
});

$('#home a').click(function() {
	current = scenes.s0;
	new_scene(true);
});
	
$(window).resize(function() {
	vertical_align();
});

$('.restart').click(function() {
	$('body').fadeOut(1000, function() {
		$('.et-page').removeClass('et-page-current').removeClass('et-force-hide');
		$('.et-wrapper').hide();
		$('.choices').empty();
		$('p').empty();
		$('#home').show();
		PageTransitions.init();
		$('body').fadeIn();
	});
	slide = 0;
	current = null;
});

$('.choices').on('click', 'button', function() {
	decision = $(this).data('choice');
	current = current.choices[decision].next();
	new_scene(false);
});
