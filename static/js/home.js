// Thank you abforce of StackOverflow.
jQuery.fn.verticalAlign = function ()
{
    return this
            .css("margin-top",($(this).parent().height() - $(this).height())/2 + 'px')
};

$(document).ready(function() {
	$('.button-collapse').sideNav();
	$('#index-banner').verticalAlign();
	$('#z').css('color', '#76FF03');
});

$(window).resize(function() {
	$('#index-banner').verticalAlign();
});