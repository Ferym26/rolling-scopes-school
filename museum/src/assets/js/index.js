// Utils
import utils from './utils/index';
import ready from './utils/_ready';
// Components
// Blocks
import Welcome from '../../blocks/welcome/script'
import Gallery from '../../blocks/gallery/script'
import Video from '../../blocks/video/script'
// Mixins

ready(() => {
	utils();
	// Components

	// Blocks
	Welcome();
	Gallery();
	Video();

	// Mixins

});
