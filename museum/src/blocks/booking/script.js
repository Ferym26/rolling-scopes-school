const Booking = {
	init() {
		this.showHandler();
		// this.btnClickEffect();
		this.calc();
	},
	showHandler() {
		const bookingBox = document.querySelector('.booking');
		const btnOpen = document.querySelector('.js_open-booking');
		const btnClose = document.querySelector('.b-close');
		const overlay = document.querySelector('.booking__overlay');
		btnOpen.addEventListener('click', function() {
			bookingBox.classList.add('is-open');
		});
		btnClose.addEventListener('click', function() {
			bookingBox.classList.remove('is-open');
		});
		overlay.addEventListener('click', function() {
			bookingBox.classList.remove('is-open');
		});
	},
	btnClickEffect() {
		const btn = document.querySelector('.booking__action .btn-main')
		btn.addEventListener('click', function (e) {
			const x = e.clientX
			const y = e.clientY
			const buttonTop = e.target.offsetTop
			const buttonLeft = e.target.offsetLeft
			console.log(e.target);
			const xInside = x - buttonLeft
			const yInside = y - buttonTop
			const circle = document.createElement('span')
			circle.classList.add('circle-effect')
			circle.style.top = yInside + 'px'
			circle.style.left = xInside + 'px'
			this.appendChild(circle)
			// setTimeout(() => circle.remove(), 500)
		})
	},
	calc() {
		const price = {
			basic: 20,
			senior: 10,
		}
		const resultNode = document.querySelector('.js_result-num');
		const btn = document.querySelectorAll('.pc-counter-btn');
		const calc = (inputBval, inputSval) => {
			return inputBval * price.basic + inputSval * price.senior
		}
		btn.forEach(item => {
			item.addEventListener('click', function(e) {
				const inputB = document.querySelector('.js_counter-basic');
				const inputS = document.querySelector('.js_counter-senior');
				setTimeout(() => {
					resultNode.innerHTML = calc(inputB.value, inputS.value);
				}, 0)
			})
		})


	}
}

export default Booking
