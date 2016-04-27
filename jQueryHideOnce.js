+function($) {
	var $nativeShow = $.fn.show;
	$.fn.show = function(hide) {
		if(typeof hide === 'string') {
			$(document).one('click', '*:not(' + hide + ')', $(hide).hide.bind(this));
		}
		return $.fn.show.call(this);
	};
}(jQuery);