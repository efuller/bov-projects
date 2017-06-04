import JSONValidator from './json-validator';

export default (function () {
	const cacheDOM = {};

	function cacheDOMElements() {
		cacheDOM.textArea = document.getElementById('json-input');
		cacheDOM.submit = document.getElementById('submit-json');
		cacheDOM.fileUpload = document.getElementById('file-upload');
		cacheDOM.flashContainer = document.getElementById('flash-container');
		cacheDOM.flashMessage = document.getElementById('flash-message');
		cacheDOM.flashClose = document.getElementById('flash-close');
	}

	function displayResult(result) {
		if (!result.status) {
			cacheDOM.flashContainer.classList.add('flash--error');
		} else {
			cacheDOM.flashContainer.classList.add('flash--success');
		}
		cacheDOM.flashContainer.classList.remove('flash--closed');

		if (undefined !== result.line) {
			cacheDOM.flashMessage.innerHTML = result.message + '<br/><pre>' + result.line + '</pre>';
		} else {
			cacheDOM.flashMessage.innerHTML = result.message;
		}
	}

	function clearMessage() {
		cacheDOM.flashContainer.classList.remove('flash--success', 'flash--error');
		cacheDOM.flashContainer.classList.add('flash--closed');
		cacheDOM.flashMessage.innerHTML = '';
	}

	function handleSubmit() {
		clearMessage();
		const input = cacheDOM.textArea.value;
		const result = JSONValidator.validate(input);
		displayResult(result);
	}

	function handleFileUpload() {
		const fileInput = cacheDOM.fileUpload.files[0];

		if (fileInput.type !== 'application/json') {
			console.log('You must use a valid JSON file type.');
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = function() {
			cacheDOM.textArea.value = fileReader.result;
		};

		fileReader.readAsText(fileInput);
	}

	function handleFlashClose() {
		clearMessage();
	}

	function bindEvents() {
		cacheDOM.submit.addEventListener('click', handleSubmit);
		cacheDOM.fileUpload.addEventListener('change', handleFileUpload);
		cacheDOM.flashClose.addEventListener('click', handleFlashClose);
	}

	function init() {
		cacheDOMElements();
		bindEvents();
	}

	init();
}());
