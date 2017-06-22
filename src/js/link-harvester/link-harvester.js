export default (function () {
	const patterns = {
		emailLinks: /<a\s*href=(?:"|')(?:mailto:)[\w\d@-]*.[\w]*">[\w\s\d]*<\/a>/igm,
		links: /<a\s*href=(?:"|')(?:http:\/\/|https:\/\/)[\w\s\d.-/-]*(?:"|')*>[\w\s\d]*<\/a>/igm,
		emailAddresses: /[\w\d-]*@[\w\d-]*.\w{2,4}/g,
		linkText: />[\w\s\d]*</g,
		linkURL: /https?:\/\/(www.)?[\w\d\s-]*.\w{2,4}/g
	};

	// Results object.
	const results = {
		links: [],
		emailAddresses: []
	};

	/**
	 * Parse out email addresses from initial results.
	 *
	 * @param   {Array} emails Email address links.
	 * @returns {Array}        The email addresses.
	 */
	function getEmailAddresses(emails) {
		if (!emails) {
			return [];
		}

		return emails.map(function (email) {
			return email.match(patterns.emailAddresses);
		});
	}

	/**
	 * Parse out URLs and link text.
	 *
	 * @param   {Array} links External links.
	 * @returns {Array}       Link object.
	 */
	function getLinkInformation(links) {
		if (!links) {
			return [];
		}

		return links.reduce(function (accumulator, current) {
			accumulator.push({
				linkText: current.match(patterns.linkText)[0].replace(/[><]/g, ''),
				url: current.match(patterns.linkURL)[0]
			});

			return accumulator;
		}, []);
	}

	/**
	 * Harvest links from input.
	 *
	 * @param  {String} input Text to search for links in.
	 * @returns {Object}      The email addresses and links.
	 */
	function harvestLinks(input) {
		// Collect the email addresses.
		results.emailAddresses = getEmailAddresses(input.match(patterns.emailLinks));

		// Collect the link information.
		results.links = getLinkInformation(input.match(patterns.links));

		return results;
	}

	// Public API.
	return {
		harvestLinks: harvestLinks
	};
}());
