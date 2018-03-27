/**
 * Modal Class
 */
export default class Modal {

	/**
	 * Constructor
	 *
	 * @param openTrigger The element that will trigger opening the modal.
	 * @param options Options that will override defaults.
	 */
	constructor(openTrigger, options) {
		/**
		 * Configuration options.
		 *
		 * Merge any user defined options into default config.
		 */
		this.config = Object.assign({
			backgroundColor: '',
			modalTitle: 'This is a modal!',
			modalText: 'Default description text for modal.',
			modalContentTemplate: '',
			onBefore: null,
			onAfter: null
		}, options);

		// Bind callback functions to the Modal.
		this.config.onBefore = this.config.onBefore.bind(this);
		this.config.onAfter = this.config.onAfter.bind(this);

		// Set open trigger.
		this.openTrigger = openTrigger;

		// Open right away.
		this.open();
	}

	// Open the modal.
	open() {
		this.render();

		// Cache DOM.
		this.modalDiv = document.getElementById('my-modal');
		this.myModalContent = document.querySelector('.my-modal-content');

		// Bind close event.
		this.modalDiv.addEventListener('click', this.close.bind(this));

		// Call onBefore if it is defined.
		if (this.config.onBefore) {
			this.config.onBefore();
		}

		// Add classes.
		this.modalDiv.classList.add('opened');
		this.myModalContent.classList.add('animate-in');

		// Remove animate class.
		setTimeout(() => {
			this.myModalContent.classList.remove('animate-in');
		}, 600);
	}

	// Close the modal.
	close(e) {
		// If we click the close button.
		if (e.target.id === 'close' && e.type === 'click') {
			this.myModalContent.classList.add('animate-out');


			// Remove classes.
			setTimeout(() => {

				// Remove classes.
				this.myModalContent.classList.remove('animate-out');
				this.modalDiv.classList.remove('opened');

				// Remove <div> from the DOM.
				this.containerDiv.parentNode.removeChild(this.containerDiv);

				// If onAfter is defined then call it.
				if (this.config.onAfter) {
					this.config.onAfter();
				}
			}, 600);
		}

		return false;
	}

	// Render the modal.
	render() {
		// Set the template.
		const html = this.htmlTemplate();

		// Create a document fragment.
		const docFrag = document.createDocumentFragment();

		// Create a <div> on the fly.
		this.containerDiv = document.createElement('div');

		// Set the HTML of the <div> to the HTML template.
		this.containerDiv.innerHTML = html;

		// Append the modal HTML to the body.
		document.body.appendChild(this.containerDiv);
	}

	// Modal HTML template.
	htmlTemplate() {
		return `
			<div id="my-modal" class="my-modal" style="background-color:${this.config.backgroundColor}";>
				
				<div class="my-modal-content">
					<button id="close">X</button>
					<h1>${this.config.modalTitle}</h1>
					${!this.config.modalContentTemplate ? `<p>${this.config.modalText}</p>` : this.config.modalContentTemplate }
				</div>

			</div>
		`;
	}
}
