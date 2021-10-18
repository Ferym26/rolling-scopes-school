const scrollTop = () => {
	const body = document.querySelector('body');
	const btnScrollTop = $('.js_scroll-top');
	const isScroll = () => {
		setTimeout(function () {
			if (body.scrollHeight > body.clientHeight + 300) {
				btnScrollTop.show();
			}
		}, 100)
	}
	isScroll();
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			btnScrollTop.addClass('active');
		} else {
			btnScrollTop.removeClass('active');
		}
	});

	$('.js_scroll-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});

	new Waypoint({
		element: document.querySelector('.footer'),
		handler: function (direction) {
			btnScrollTop.toggleClass('nofix');
		},
		offset: '100%'
	});
}

export default scrollTop
