const Booking = {
	init() {
		this.showHandler();
	},
	showHandler() {
		const bookingBox = document.querySelector('.booking');
		const btnOpen = document.querySelector('.js_open-booking');
		const btnClose = document.querySelector('.b-close');
		const layout = document.querySelector('.booking__layout');
		btnOpen.addEventListener('click', function() {
			bookingBox.classList.add('is-open');
		});
		btnClose.addEventListener('click', function() {
			bookingBox.classList.remove('is-open');
		});
		layout.addEventListener('click', function() {
			bookingBox.classList.remove('is-open');
		});
	},
}

export default Booking
