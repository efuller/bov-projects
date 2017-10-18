class Messages {
	static getMessageContainer() {
		return document.querySelector('.puzzle__message-container');
	}

	static createMessageMarkup(message) {
		return `<h1 class="puzzle__message">${message}</h1>`;
	}

	static createMessage(message) {
		const messageContainer = Messages.getMessageContainer();

		messageContainer.classList.add('visible');
		messageContainer.innerHTML = Messages.createMessageMarkup(message);
	}

	static clearMessage() {
		const messageContainer = Messages.getMessageContainer();
		messageContainer.classList.remove('visible');
		messageContainer.innerHTML = '';
	}
}

export default Messages;
