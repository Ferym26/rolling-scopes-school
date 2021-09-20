import global from './_global';
import svgPolifill from './_svgPolifill';
import userAgentCheck from './_userAgentCheck';
import lazyLoad from './_lazy';
import validation from './_validation';

const utils = () => {
	global();
	svgPolifill();
	userAgentCheck();
	lazyLoad();
	validation();
	if (window.matchMedia(`(max-width: ${settings.mobBreakpoint - 1}px)`).matches) {
		//
	}
	if (window.matchMedia(`(min-width: ${settings.mobBreakpoint}px)`).matches) {
		//
	}
}

export default utils
