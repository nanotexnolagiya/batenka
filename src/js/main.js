import './vendor';
import './sliders';
import vars from './variables';

vars.$burger.on('click', e => {
	let $this = $(e.currentTarget);
	$this.toggleClass('is-active');

	vars.$responsiveMenu.slideToggle();
});
