import scrollTo from './scrollTo';

const BackToTop = function () {
	function createBackToTop() {
		const el = document.createElement('div');
		el.classList.add('back-to-top');
		el.innerHTML = '&#8593;';
		el.setAttribute('style', 'background: goldenrod; height: 30px; width: 30px; position: fixed; right: 30px; cursor: pointer; text-align: center; line-height: 30px');
		el.addEventListener('click', function () {
			scrollTo(0);
		});
		return el;
	}

	function appendBackToTop(el) {
		// Do not add if on mobile.
		if (window.innerWidth < 640) {
			return;
		}

		document.body.appendChild(el);
		document.querySelector('.back-to-top').style.top = (document.documentElement.clientHeight - 60) + 'px';
		document.querySelector('.back-to-top').style.display = 'fixed';
	}

	function backToTop() {
		// Bail if already in the DOM.
		if (document.querySelector('.back-to-top')) {
			return;
		}

		const el = createBackToTop();
		appendBackToTop(el);
	}

	return backToTop;
};

const backToTop = BackToTop();

export default backToTop;
