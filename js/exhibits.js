$(document).ready(function() {
	$('.button-collapse').sideNav();
	$('html').removeClass('preload');
	$('.gonzofiy').gonzofiy();
});

(function($) {
	/* A plugin made to appease Mr. Gonzalez. This will automatically give us an A.	*/
	
	$.fn.gonzofiy = function(options) {
		var section = this,
			menu, url, activesection,
			active = false;
	
		var settings = $.extend({
			menu: '.table-of-contents',
			animout: 'fadeOutLeft',
			animin: 'fadeInLeft',
		}, options);
		
		menu = $(settings.menu);
		
		$.fn.hidesection = function(callback) {
			this.addClass(settings.animout + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(this).hide().removeClass(settings.animout + ' animated');
				if (typeof callback == 'function') {
					callback.call(this);
				}
			});		
		}
		
		$.fn.showsection = function(callback) {			
			this.show().addClass(settings.animin + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(this).removeClass(settings.animin + ' animated');
				if (typeof callback == 'function') {
					callback.call(this);
				}
			});
			activesection = $(this);
		}
		
		$.fn.setmenu = function(id) {
			this.find('.active').removeClass('active');
			$('a[href="' + id + '"]').addClass('active');
		}
		
		$(window).bind('hashchange', function() {
			var hash = '#' + window.location.hash.substr(1);
			var next = $('main').find(section, '.active');
			
			if (!active && hash.length > 1 && next.length && !next.hasClass('active')) {
				active = true;
				
				menu.setmenu(hash);
						
				if (activesection) {
					activesection.hidesection(function() {
						$(hash).showsection(function() {
							active = false;
						});
					});
				} else {
					$(hash).showsection(function() {
						active = false;
					});
				}
			}
		});
		
		menu.find('a').each(function() {
			$(this).click(function() {
				if (active) {
					return false;
				}
			});
		});
		
		$(window).trigger('hashchange');
	};
}(jQuery));