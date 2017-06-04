/**
 * First pass at a simple JSON validator.
 *
 * I understand, this code is not of the highest quality because learning.
 * I plan to refactor this using more functional techniques once I get
 * better.
 */
export default (function () {

	const patterns = {
		beginningPattern: /^{$/,
		endPattern: /^}$/,
		string: /^"\w*":\s*"\w*(\s*\w*.,?)*",$/,
		stringNoComma: /^"\w*":\s*"\w*(\s*\w*.,?)*"$/,
		bool: /"\w+":\s?(true|false),/,
		boolNoComma: /"\w+":\s?(true|false)/,
		num: /"\w+":\s?\d*,/,
		numNoComma: /"\w+":\s?\d*/,
		objectStart: /"\w+":\s?{/,
		objectEnd: /^},$/,
		objectEndNoComma: /^}$/,
		arrayStart: /"\w+":\s?\[/,
		arrayEnd: /^],$/,
		arrayEndNoComma: /^]$/,
		arrayObjectStart: /^{$/,
		arrayObjectEnd: /^},$/,
		arrayObjectEndNoComma: /^}$/,
		hasComma: /,$/
	};

	function hasComma(value) {
		return patterns.hasComma.test(value);
	}

	function isString(value) {
		return patterns.string.test(value);
	}

	function isStringNoComma(value) {
		return patterns.stringNoComma.test(value);
	}

	function isBool(value) {
		return patterns.bool.test(value);
	}

	function isBoolNoComma(value) {
		return patterns.boolNoComma.test(value);
	}

	function isNum(value) {
		return patterns.num.test(value);
	}

	function isNumNoComma(value) {
		return patterns.numNoComma.test(value);
	}

	function isArray(value) {
		return patterns.arrayStart.test(value);
	}

	function isArrayEnd(value) {
		return patterns.arrayEnd.test(value);
	}

	function isArrayEndNoComma(value) {
		return patterns.arrayEndNoComma.test(value);
	}

	function isObjectStart(value) {
		return patterns.objectStart.test(value);
	}

	function isObjectEnd(value) {
		return patterns.objectEnd.test(value);
	}

	function isObjectEndNoComma(value) {
		return patterns.objectEndNoComma.test(value);
	}

	function isArrayObjectStart(value) {
		return patterns.arrayObjectStart.test(value);
	}

	function isArrayObjectEnd(value) {
		return patterns.objectEnd.test(value);
	}

	function isArrayObjectEndNoComma(value) {
		return patterns.objectEndNoComma.test(value);
	}

	function prepareJSON(value) {
		return value.trim().replace(/^\s*\r*\t*/gm, '').split('\n');
	}

	function newError(status, message, line) {
		return {
			status: status,
			message: message,
			line: line
		};
	}

	function validate(input) {
		var objectFound = false;
		var	arrayObjectFound = false;
		var	arrayFound = false;
		var i = 1;


		var cleanedInput = prepareJSON(input);
		var length = cleanedInput.length;

		if (!patterns.beginningPattern.test(cleanedInput[0])) {
			return newError(false, 'There was an error on line 1.', cleanedInput[0]);
		}

		if (!patterns.endPattern.test(cleanedInput[cleanedInput.length - 1])) {
			return newError(false, 'There was an error on line ' + (cleanedInput.length - 1), cleanedInput[cleanedInput.length - 1]);
		}

		for (; i < length; i += 1) {
			// We don't need to check the last line because we already did.
			if (i === length - 1) {
				break;
			}

			const currentInput = cleanedInput[i].trim(); // Current value we are checking.
			const nextInput = cleanedInput[i + 1].trim(); // Next value.
			const currentLine = i + 1;

			// Check to see if last closing element
			if (i === length - 2) {
				if (hasComma(currentInput)) {
					return newError(false, 'You probably have a dangling comma on line ' + currentLine, cleanedInput[i]);
				}
				break;
			}

			// Objects
			if (!objectFound && isObjectStart(currentInput)) {
				objectFound = true;
				continue;
			}

			if (objectFound && isObjectEnd(currentInput)) {
				objectFound = false;
				continue;
			}

			if (objectFound) {
				// If this is the last item in the object, do this.
				if (isObjectEnd(nextInput) || isObjectEndNoComma(nextInput)) {
					// this is the last element.
					if (hasComma(currentInput)) {
						return newError(false, 'You probably have a dangling comma on line ' + currentLine, cleanedInput[i]);
					}

					if (isStringNoComma(currentInput) || isBoolNoComma(currentInput) || isNumNoComma(currentInput)) {
						continue;
					} else {
						return newError(false, 'There was an issue with the last element in the object on line ' + currentLine, cleanedInput[i]);
					}
				}

				if (!isString(currentInput) && !isBool(currentInput) && !isNum(currentInput)) {
					return newError(false, 'There was an error on line ' + currentLine, cleanedInput[i]);
				}
			}

			// Arrays
			if (arrayFound === false && isArray(currentInput)) {
				arrayFound = true;
				continue;
			}

			if (arrayFound && isArrayEnd(currentInput)) {
				arrayFound = false;
				continue;
			}

			if (arrayFound) {
				// If we find an array object.
				if (isArrayObjectStart(currentInput)) {
					arrayObjectFound = true;
					continue;
				}

				if (arrayObjectFound) {

					// If this is the closing brace of the last object in an array of objects.
					if (isArrayEnd(nextInput) || isArrayEndNoComma(nextInput)) {
						if (isArrayObjectEndNoComma(currentInput)) {
							continue;
						} else {
							return newError(false, 'Probably have a dangling comma at the closing of the last array object on line ' + currentLine, cleanedInput[i]);
						}
					}

					if (isObjectEnd(nextInput) || isObjectEndNoComma(nextInput)) {
						if (hasComma(currentInput)) {
							return newError(false, 'You probably have a dangling comma on line ' + currentLine, cleanedInput[i]);
						}

						if (isStringNoComma(currentInput) || isBoolNoComma(currentInput) || isNumNoComma(currentInput)) {
							continue;
						} else {
							return newError(false, 'There was an issue with the last element in the object on line ' + currentLine, cleanedInput[i]);
						}
					}

					if (isArrayObjectEnd(currentInput)) {
						arrayObjectFound = false;
						continue;
					}

					if (!isString(currentInput) && !isBool(currentInput) && !isNum(currentInput)) {
						return newError(false, 'There was an error on line ' + currentLine, cleanedInput[i]);
					}
				}
			}

			if (isNum(currentInput) || isBool(currentInput) || isString(currentInput)) {
				continue;
			} else {
				return newError(false, 'There is an error on line ' + currentLine, cleanedInput[i]);
			}
		} // end of for loop

		return {
			status: true,
			message: 'Your JSON is valid!'
		};
	}

	return {
		validate: validate
	};
}());
