import global from './_global';
import svgPolifill from './_svgPolifill';
import userAgentCheck from './_userAgentCheck';
import lazyLoad from './_lazy';
import validation from './_validation';
// import scrollTop from '../../../mixins/scroll-top/script';

const utils = () => {
	global();
	svgPolifill();
	userAgentCheck();
	lazyLoad();
	validation();
	scrollTop();
	if (window.matchMedia(`(max-width: ${settings.mobBreakpoint - 1}px)`).matches) {
		//
	}
	if (window.matchMedia(`(min-width: ${settings.mobBreakpoint}px)`).matches) {
		//
	}
}

export default utils
