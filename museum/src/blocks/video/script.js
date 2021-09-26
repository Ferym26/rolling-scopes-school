const Video = () => {
	const sliderMain = tns({
		container: '.js_slider-video-main',
		items: 1,
		slideBy: 1,
		autoplay: false,
		lazyload: true,
		controls: false,
		nav: false,
		mouseDrag: false,
		animateIn: false,
		animateOut: false,
		animateNormal: false,
		// responsive: {
		// 	640: {
		// 		items: 1
		// 	},
		// },
	});
	const sliderNav = tns({
		container: '.js_slider-video-nav',
		items: 3,
		slideBy: 1,
		gutter: 42,
		autoplay: false,
		lazyload: true,
		mouseDrag: true,
		animateIn: false,
		animateOut: false,
		animateNormal: false,
		prevButton: '.slider-video-nav__btn--prev',
		nextButton: '.slider-video-nav__btn--next',
		navContainer: '.slider-video-nav__nav-dots',
		// responsive: {
		// 	640: {
		// 		// items: 1
		// 	},
		// }
	});
	const setSlideMain = () => {
		let index = sliderNav.getInfo().displayIndex;
		sliderMain.goTo(index - 1);
	};
	sliderNav.events.on('indexChanged', setSlideMain);
}

export default Video
