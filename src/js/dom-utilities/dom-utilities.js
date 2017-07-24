function DOMUtilitites() {
	this.getAncestorBySelector = function (element, selector) {
		if (element.parentNode === null) {
			return null;
		}
		if (document.querySelector(selector) === element) {
			return element;
		}

		return this.getAncestorBySelector(element.parentNode, selector);
	};

	this.getSiblingsBySelector = function (selector) {
		var element = document.querySelector(selector);
		var parent = element.parentNode;
		var siblings = [];

		var filteredWalker = document.createTreeWalker(parent, NodeFilter.SHOW_ELEMENT, {
			acceptNode: function (node) {
				if (node.parentNode === parent && node !== element) {
					return NodeFilter.FILTER_ACCEPT;
				}

				return NodeFilter.FILTER_SKIP;
			}
		});

		while (filteredWalker.nextNode()) {
			siblings.push(filteredWalker.currentNode);
		}

		return siblings;
	};

	this.insertAfter = function (nodeToInsert, nodeToInsertAfter) {
		return nodeToInsertAfter.parentNode.insertBefore(nodeToInsert, nodeToInsertAfter.nextSibling);
	};

	this.swapElements = function (elementToSwapOut, elementToSwapIn) {
		var cloneElementToSwapOut;
		var cloneElementToSwapIn;

		try {
			cloneElementToSwapOut = elementToSwapOut.cloneNode(true);
			cloneElementToSwapIn = elementToSwapIn.cloneNode(true);

			elementToSwapOut.parentNode.replaceChild(cloneElementToSwapIn, elementToSwapOut);
			elementToSwapIn.parentNode.replaceChild(cloneElementToSwapOut, elementToSwapIn);
			return true;
		} catch (e) {
			console.warn('Something went wrong!');
			return false;
		}
	};

	this.removeAll = function (selector) {
		var elements = document.querySelectorAll(selector);
		var removed = [];

		for (var i = 0; i < elements.length; i++) {
			removed.push(elements[i].parentNode.removeChild(elements[i]));
		}

		return removed;
	};
}

export default new DOMUtilitites();
