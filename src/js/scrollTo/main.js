import scrollTo from './scrollTo';
import backToTop from './backToTop';

const menu = document.querySelector('.menu');

function scrollMenu(e) {
	e.preventDefault();

	// Set the target.
	const el = e.target;

	// Bail if not clicking an <a>.
	if (el.parentNode.className !== 'menu-item') {
		return;
	}
	// Make Magic!
	scrollTo(el.hash);
}

menu.addEventListener('click', scrollMenu);
document.addEventListener('scroll', function() {
	backToTop();
});
