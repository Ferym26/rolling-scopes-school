// Объект глобальных настроек и методов
const global = () => {
	window.settings = {
		mobBreakpoint: 1230, // точка перехода состояния десктоп/моб
		globalResizer: (funcMob, funcDesc) => { // метод однократного вызова функций на мобайле и/или десктопе. своя фция для каждого состояния
			const n = window.settings.mobBreakpoint;
			const w = window.innerWidth;
			let minResize = false;
			let maxResize = false;
			const triggerOnResize = function (w) {
				if (w <= n && !minResize && funcMob) {
					minResize = true;
					maxResize = false;
					// console.log('its mobile');
					funcMob();
				}
				if (w >= n && !maxResize && funcDesc) {
					maxResize = true;
					minResize = false;
					// console.log('its desctop');
					funcDesc();
				}
			};
			triggerOnResize(w);
			$(window).on("resize", function () {
				let w = window.innerWidth;
				triggerOnResize(w);
			});
		},
	}
}

export default global

