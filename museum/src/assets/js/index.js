// import 'bootstrap/js/src/modal'; //модалки
// import 'bootstrap/js/src/tab'; //табы
// import 'bootstrap/js/src/collapse'; //аккордеоны

// Utils
import utils from './utils/index';
import ready from './utils/_ready';
// Components
// Blocks
import Welcome from '../../blocks/welcome/script'
import Gallery from '../../blocks/gallery/script'
// Mixins

ready(() => {
	utils();
	// Components

	// Blocks
	Welcome();
	Gallery();

	// Mixins

});
