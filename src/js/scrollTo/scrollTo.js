const ScrollTo = function () {
	var currentPosition = 0;
	var destinationElement = false;
	var destinationPosition = 0;
	var animationID = null;
	var defaultOptions = {};

	/**
	 * Find the destination element in the DOM.
	 */
	function setDestination(target) {
		destinationElement = document.querySelector(target);
		return destinationElement;
	}

	/**
	 * Get the pixel value of the position.
	 */
	function setDestinationPosition(element) {
		const elementTop = Math.round(element.getBoundingClientRect().top);
		return elementTop + window.pageYOffset;
	}

	/**
	 * Scroll to element.
	 */
	function scroll() {
		var speed = defaultOptions.speed;

		if (destinationPosition < currentPosition) {
			// Increment current position.
			currentPosition -= speed;

			// If current position is equal or greater.
			if (currentPosition <= destinationPosition) {
				window.scrollTo(0, destinationPosition);
				currentPosition = window.pageYOffset;
				window.cancelAnimationFrame(animationID);
				return;
			}
		} else {
			// If remaining distance is less than offset.
			if ((destinationPosition - currentPosition) < defaultOptions.speed) {
				speed = destinationPosition - currentPosition;
			}

			// Increment current position.
			currentPosition += speed;

			// If current position is equal or greater.
			if (currentPosition >= destinationPosition) {
				window.scrollTo(0, destinationPosition);
				currentPosition = window.pageYOffset;
				window.cancelAnimationFrame(animationID);
				return;
			}
		}

		window.scrollTo(0, currentPosition);

		animationID = window.requestAnimationFrame(scroll);
	}

	// Public function.
	function scrollTo(target, options) {
		if (arguments[1]) {
			defaultOptions.speed = options.speed || 30;
		} else {
			defaultOptions.speed = 30;
		}
		currentPosition = window.pageYOffset;

		if (typeof target === 'number') {
			destinationPosition = target;
		} else {
			destinationElement = setDestination(target);
			destinationPosition = setDestinationPosition(destinationElement);
		}

		scroll();
	}

	return scrollTo;
};

const scrollTo = ScrollTo();

export default scrollTo;
