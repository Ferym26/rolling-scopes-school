const Video = () => {
	$('.js_slider-video-nav').owlCarousel({
		items: 2,
		margin: 20,
		loop: true,
		nav: true,
		responsive: {
			767 : {
				items: 3,
				margin: 42,
			}
		},
	})
}

export default Video
