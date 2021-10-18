const lazyLoad = () => {
	const lazyPic = $('.lazy-img');
	if (lazyPic.length > 0) {
		new LazyLoad({
			elements_selector: ".lazy-img",
			threshold: 200,
		});
	}
}

export default lazyLoad
