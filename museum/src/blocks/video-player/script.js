const videoPlayer = {
	init() {
		this.rangeSlider();
		this.toggleIcon();
	},
	rangeSlider() {
		const ranges = document.querySelectorAll('.vp-progress');
		ranges.forEach((item) => {
			item.addEventListener('input', function() {
				const value = this.value;
				this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
			})
		})
	},
	toggleIcon() {
		const btns = document.querySelectorAll('.vp-nav-btn');
		btns.forEach((item) => {
			item.addEventListener('click', function() {
				item.classList.toggle('is-off')
			})
		})
	},
}

export default videoPlayer
