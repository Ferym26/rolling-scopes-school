const counter = () => {
	const contersList = document.querySelectorAll('.pc-counter');
	contersList.forEach(item => {
		const btnPlus = item.querySelector('.js_pc-counter-plus');
		const btnMinus = item.querySelector('.js_pc-counter-minus');
		const input = item.querySelector('.js_pc-counter-input');
		btnPlus.addEventListener('click', function() {
			input.stepUp(1);
		});
		btnMinus.addEventListener('click', function() {
			input.stepDown(1);
		});
	})
}

export default counter
