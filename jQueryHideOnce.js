+function($) {
	var $nativeShow = $.fn.show;
	/**
	 * Description: Hides an element with a singly bound click listener, after show.
	 * Param: String - Selector for the element to be hidden.
	 * Usage: $('#showMeOnce').show('#showMeOnce') - Hides `showMeOnce` on click outside it.
	 **/
	$.fn.show = function(hide) {
		var $hide;
		if(typeof hide === 'string') {
			$hide = $(hide);
			$(document).one('click', '*:not(' + hide + ')', $hide.hide.bind($hide));
		}
		return $.fn.show.call(this);
	};
}(jQuery);