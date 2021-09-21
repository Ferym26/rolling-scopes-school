const Welcome = () => {
	const slider = tns({
		container: '.js_slider-welcome',
		items: 1,
		slideBy: 1,
		autoplay: false,
		lazyload: true,
		mouseDrag: true,
		onInit() {},
		controlsContainer: '.slider-welcome__nav-controls',
		navContainer: '.slider-welcome__nav-dots',
		animateIn: false,
		animateOut: false,
		animateNormal: false,
		responsive: {
			640: {
				items: 1
			},
		}
	});

	const indexNode = document.querySelector('.js_slide-index');
	const allNode = document.querySelector('.js_slide-all');
	const nuller = num => num < 10 ? `0${num}` : num;
	allNode.innerHTML = nuller(slider.getInfo().pages);
	const counter = () => {
		indexNode.innerHTML = nuller(slider.getInfo().displayIndex);
	};
	counter();
	slider.events.on('indexChanged', counter);
}

export default Welcome
