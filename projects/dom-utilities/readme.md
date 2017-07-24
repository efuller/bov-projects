# DOM Utilities
This library adds a few handy functions for doing some cool things with the DOM.

The examples below can be run using DevTools on this page:  
https://efuller.github.io/bov-projects/projects/dom-utilities/index.html

Just copy and paste the code examples below to see results!

## getAncestorBySelector
```
// Grab a reference to an element.
const el = document.getElementById('permalink_1');

DOMUtilities.getAncestorBySelector(el, '.outer-container');
```

## getSiblingsBySelector
```
DOMUtilities.getSiblingsBySelector('#permalink_1 > h2');
```

## insertAfter
```
// Create an element to insert.
const el = document.createElement('span');

// Select element to insert after.
const insertAfter = document.getElementById('permalink_1');

DOMUtilities.insertAfter(el, insertAfter);
```

## swapElements
```
const swap1 = document.querySelector('#permalink_1 > .intro');
const swap2 = document.querySelector('#permalink_1 > .read');

DOMUtilities.swapElements(swap1, swap2);
```

## removeAll
```
DOMUtilities.removeAll('.intro');
```