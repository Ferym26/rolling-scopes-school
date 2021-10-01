const MainMenu = () => {
	const btnOpenMenu = document.querySelector('.js_main-menu-btn');
	// const overlay = document.querySelector('.js_overlay');
	const menu = document.querySelector('.js_main-menu');
	const links = menu.querySelectorAll('.main-menu__link');
	// const body = document.querySelector('body');
	const closeMenu = () => {
		// body.classList.remove('fixed');
		// overlay.classList.add('is-hidden');
		menu.classList.remove('is-open');
	}
	const toggleMenu = () => {
		// body.classList.toggle('fixed');
		// overlay.classList.toggle('is-hidden');
		menu.classList.toggle('is-open');
	}
	btnOpenMenu.addEventListener('click', toggleMenu);
	// overlay.addEventListener('click', closeMenu);
	console.log(links);
	links.forEach((link) => {
		link.addEventListener('click', closeMenu);
	});

	// btnOpenMenu.addEventListener('focusout', (e) => {
	// 	closeMenu();
	// });
}

export default MainMenu
