import linkHarvester from './link-harvester';

export default (function () {
	const cacheDOM = {};

	function cacheDOMElements() {
		cacheDOM.textArea = document.getElementById('harvester-text');
		cacheDOM.submit = document.getElementById('submit-text');
		cacheDOM.fileUpload = document.getElementById('file-upload');
		cacheDOM.flashContainer = document.getElementById('flash-container');
		cacheDOM.flashMessage = document.getElementById('flash-message');
		cacheDOM.flashClose = document.getElementById('flash-close');
		cacheDOM.harvestLinks = document.getElementById('harvest-links');
		cacheDOM.harvestEmails = document.getElementById('harvest-emails');
		cacheDOM.urlResults = document.getElementById('url-results');
	}

	function abort() {
		cacheDOM.flashContainer.classList.add('flash--error');
		cacheDOM.flashContainer.classList.remove('flash--closed');
	}

	function createEmailMarkup(results) {
		if (!results.emailAddresses.length) {
			return '<li>There were no email addresses found.</li>';
		}

		return results.emailAddresses.map(function (addy) {
			return '<li>' + addy + '</li>';
		}).join('');
	}

	function createLinkMarkup(results) {
		if (!results.links.length) {
			return '<li>There were no links found.</li>';
		}

		return results.links.map(function (link) {
			return '<li>' + link.linkText + ' - ' + link.url + '</li>';
		}).join('');
	}

	function displayResult(results) {
		var emailHTML = '';
		var linksHTML = '';

		if (!results.emailAddresses.length && !results.links.length) {
			abort();
			return;
		}

		// Show the results pane.
		cacheDOM.urlResults.classList.remove('hide');

		emailHTML = createEmailMarkup(results);

		linksHTML = createLinkMarkup(results);

		cacheDOM.harvestEmails.innerHTML = emailHTML;
		cacheDOM.harvestLinks.innerHTML = linksHTML;
	}

	function clearResults(clearTextArea) {
		cacheDOM.urlResults.classList.add('hide');
		cacheDOM.harvestEmails.innerHTML = '';
		cacheDOM.harvestLinks.innerHTML = '';
		cacheDOM.flashContainer.classList.add('flash--closed');


		if (clearTextArea) {
			cacheDOM.textArea.value = '';
		}
	}

	function handleReset(e) {
		if (e.target.id !== 'clear-all') {
			return;
		}

		clearResults(true);
	}

	function handleSubmit() {
		clearResults();
		const input = cacheDOM.textArea.value;

		const results = linkHarvester.harvestLinks(input);

		displayResult(results);
	}

	function handleFileUpload() {
		clearResults();
		const fileInput = cacheDOM.fileUpload.files[0];

		if (fileInput.type !== 'text/plain' && fileInput.type !== 'text/html') {
			alert('You must use a valid text or html file.');
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = function () {
			cacheDOM.textArea.value = fileReader.result;
		};

		fileReader.readAsText(fileInput);
	}

	function bindEvents() {
		cacheDOM.submit.addEventListener('click', handleSubmit);
		cacheDOM.fileUpload.addEventListener('change', handleFileUpload);
		cacheDOM.urlResults.addEventListener('click', handleReset);
		cacheDOM.flashClose.addEventListener('click', clearResults);
	}

	function init() {
		cacheDOMElements();
		bindEvents();
	}

	init();
}());

// https://webpack.github.io/docs/hot-module-replacement.html
// if (module.hot) {
// 	module.hot.accept();
// }