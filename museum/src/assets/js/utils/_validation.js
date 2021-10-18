const validation = () => {
	const loadedFlag = {
		load: true,
	};
	const BVInit = () => {
		$('.bv-form:not(.bv-form-initialized)')
			.bootstrapValidator({
				feedbackIcons: {
					valid: 'bv-icon-ok',
					invalid: 'bv-icon-not',
					validating: 'bv-icon-refresh'
				},
			})
			.on('init.form.bv', function (e) {
				const $this = $(this);
				$this.addClass('bv-form-initialized');
			})
			.on('success.form.bv', function (e) {
				const form = $(e.target);
				const msg = form.serialize();
				$.ajax({
					type: 'POST',
					url: './module/moduleForm.php',
					data: msg,
					success: function (data) {
						console.log('success', data);
						$('#modalRequest').modal('hide');
						if (data == "success") {
							form.find('input').val("");
							$('#modalSuccess').modal('show');
						} else {
							$('#modalError').modal('show');
						}
						setTimeout(function () {
							$('#modalSuccess').modal('hide');
							$('#modalError').modal('hide');
						}, 3000);
					},
					error: function (xhr, str) {
						console.log('error', msg);
						$('#modalRequest').modal('hide');
						$('#modalError').modal('show');
						setTimeout(function () {
							$('#modalError').modal('hide');
						}, 3000);
					}
				});
			});
	}

	const inputmaskInit = () => {
		$('input[type="tel"]').inputmask({
			showMaskOnHover: false,
			oncomplete: function () {
				const $this = $(this);
				const $form = $this.closest('.bv-form');
				$form.data('bootstrapValidator').updateStatus($this.attr('name'), 'VALID', null);
			},
			onincomplete: function () {
				const $this = $(this);
				const $form = $this.closest('.bv-form');
				setTimeout(function () {
					$form.data('bootstrapValidator').updateStatus($this.attr('name'), 'INVALID', null);
				}, 0)
			},
		});
		$('.js_inputYNP').inputmask({
			showMaskOnHover: false,
		});
	}

	const formstylerInit = () => {
		$('.js_form-select').styler({
			selectPlaceholder: false,
		});
	}

	// загрузка(по необходимости) и инит валидатора
	const loaderValidation = () => {
		if (!loadedFlag.load) {
			BVInit();
			inputmaskInit();
			formstylerInit();
		} else {
			$.getScript('js/vendors/bootstrapValidator.min.js', BVInit);
			$.getScript('js/vendors/jquery.inputmask.min.js', inputmaskInit);
			$.getScript('js/vendors/jquery.formstyler.min.js', formstylerInit);
			loadedFlag.load = false;
		}
	}

	$(document).on('mouseover touchstart touchend', '.bv-form', function () {
		if (loadedFlag.load) {
			loaderValidation();
		}
	})





	// $('.bv-form').bootstrapValidator({
	// 	feedbackIcons: {
	// 		valid: 'bv-icon-ok',
	// 		invalid: 'bv-icon-not',
	// 		validating: 'bv-icon-refresh'
	// 	},
	// })
	// .on('success.form.bv', function (e) {
	// 	const form = $(e.target);
	// 	const msg = form.serialize();
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: './module/moduleForm.php',
	// 		data: msg,
	// 		success: function (data) {
	// 			console.log('success', data);
	// 			$('#modalRequest').modal('hide');
	// 			if (data == "success") {
	// 				form.find('input').val("");
	// 				$('#modalSuccess').modal('show');
	// 			} else {
	// 				$('#modalError').modal('show');
	// 			}
	// 			setTimeout(function () {
	// 				$('#modalSuccess').modal('hide');
	// 				$('#modalError').modal('hide');
	// 			}, 3000);
	// 		},
	// 		error: function (xhr, str) {
	// 			console.log('error', msg);
	// 			$('#modalRequest').modal('hide');
	// 			$('#modalError').modal('show');
	// 			setTimeout(function () {
	// 				$('#modalError').modal('hide');
	// 			}, 3000);
	// 		}
	// 	});
	// });

	// $('input[type="tel"]').inputmask({
	// 	showMaskOnHover: false,
	// 	oncomplete: function () {
	// 		const $this = $(this);
	// 		const $form = $this.closest('.bv-form');
	// 		$form.data('bootstrapValidator').updateStatus($this.attr('name'), 'VALID', null);
	// 	},
	// 	onincomplete: function () {
	// 		const $this = $(this);
	// 		const $form = $this.closest('.bv-form');
	// 		setTimeout(function () {
	// 			$form.data('bootstrapValidator').updateStatus($this.attr('name'), 'INVALID', null);
	// 		}, 0)
	// 	},
	// });

	// $('.js_inputYNP').inputmask({
	// 	showMaskOnHover: false,
	// });



	// Vue.use(VueMask.VueMaskPlugin);
	// Vue.use(window.vuelidate.default);
	// const { required, minLength } = window.validators;

	// new Vue({
	// 	el: '#forma',
	// 	data: () => ({
	// 		str: 'dsfgsdfgdsg',
	// 		name: '',
	// 	}),
	// 	validations: {
	// 		name: {
	// 			required,
	// 			minLength: minLength(4),
	// 		},
	// 	}
	// });
}

export default validation
