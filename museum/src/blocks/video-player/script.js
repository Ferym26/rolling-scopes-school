const videoPlayer = {

	settings: {
		video: document.querySelector('.js_video'),
		btnPlayBig: document.querySelector('.js_play-big'),
		btnPlay: document.querySelector('.js_btn-play'),
	},

	init() {
		this.rangeSlider();
		this.play();
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

	_iconStatusOFF(btn) {
		btn.classList.add('is-off');
	},

	_iconStatusON(btn) {
		btn.classList.remove('is-off')
	},

	play() {
		const _this = this;
		function playPause() {
			if (_this.settings.video.paused) {
				_this.settings.video.play();
				_this.settings.btnPlayBig.classList.add('hide');
				_this._iconStatusOFF(_this.settings.btnPlay);
			} else {
				_this.settings.video.pause();
				_this.settings.btnPlayBig.classList.remove('hide');
				_this._iconStatusON(_this.settings.btnPlay);
			}
		}
		_this.settings.btnPlayBig.addEventListener('click', playPause);
		_this.settings.btnPlay.addEventListener('click', playPause);
	},
}

export default videoPlayer
