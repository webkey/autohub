/* footer at bottom */
function footerBottom(){
	var footer = $('.footer');
	var footerOuterHeight = footer.outerHeight();
	footer.css({
		'margin-top': -footerOuterHeight
	});
	$('.spacer').css({
		'height': footerOuterHeight
	});
}
/* footer at bottom end */

/*Drop Navigation*/
function dropNavigation() {
	var btnFilters = $('.btn-filters');
	$('.header').on('click', '.btn-filters', function (e) {
		var btn = $(this);
		btn
			.closest('.wrapper')
			.toggleClass('expanded-filters')
			.find('.filters')
			.stop()
			.slideToggle();

		e.preventDefault();
	});
	//$('.filters').on('click', 'a', function (e) {
	//	if ($(window).width() > 767) { return; }
	//
	//	var item = $(this).closest('li');
	//	var filterDrop = item.find('.filters-drop');
	//	if (!filterDrop.length){return;}
	//	e.preventDefault();
	//	$('.filters-drop')
	//		.stop()
	//		.slideUp();
	//	$('.filters .expanded-drop').each(function () {
	//		$(this).removeClass('expanded-drop');
	//	});
	//	if(filterDrop.is(':hidden')){
	//		item
	//			.addClass('expanded-drop')
	//			.find('.filters-drop')
	//			.stop()
	//			.slideToggle();
	//	}
	//});
	$('.filters').on('click', 'a', function (e) {
		//if ($(window).width() > 767) { return; }
		if (btnFilters.is(':hidden')) { return; }

		var item = $(this).closest('li');
		var filterDrop = item.find('.filters-drop');
		if (!filterDrop.length){return;}
		e.preventDefault();
		item
			.toggleClass('expanded-drop')
			.find('.filters-drop')
			.stop()
			.slideToggle();
	});
}
function clearDrop(){
	$('.filters').attr('style','');
	$('.wrapper').removeClass('expanded-filters');
	$('.filters li').each(function () {
		$(this).removeClass('expanded-drop');
	});
	$('.filters-drop').each(function () {
		$(this).attr('style','');
	})
}
/*Drop Navigation end*/
/** ready/load/resize document **/

$(document).ready(function(){
	dropNavigation();
});
$(window).load(function(){
	footerBottom();
})
;$(window).resize(function(){
	footerBottom();
	clearDrop();
});