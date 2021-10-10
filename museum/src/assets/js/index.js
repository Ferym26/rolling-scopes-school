// Utils
import utils from './utils/index';
import ready from './utils/_ready';
// Components
// Blocks
import Welcome from '../../blocks/welcome/script'
import Gallery from '../../blocks/gallery/script'
import Video from '../../blocks/video/script'
import videoPlayer from '../../blocks/video-player/script'
import Booking from '../../blocks/booking/script'
import MainMenu from '../../blocks/main-menu/script'
import counter from '../../mixins/pc-counter/script'
import explore from '../../blocks/explore/script'
// Mixins

ready(() => {
	utils();
	// Components

	// Blocks
	Welcome.init();
	Gallery();
	Video();
	videoPlayer.init();
	Booking.init();
	MainMenu();
	explore.init();

	// Mixins
	counter();

});
