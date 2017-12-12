## Components
- The browser is an object, Browser Object Model
- Window is the top level object on BOM, [for window Reference] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- The most BOM object you'll interact with is Document Object Model DOM which contains the current HTML file.
=====================================================================================
### Target Elements in the DOM
- [DOM properties](https://developer.mozilla.org/en-US/docs/Web/API/Document)
Examle:
```js
document.body; // The body element
document.title // The body title
document.URL; // The body URL
```
- [DOM Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document)
Examle:
```js
document.getElementsByClassName('className');
document.getElementById('id');
document.getElementsTagName('HTML tag');
// New Methods, more powerful than the pervious methods
document.querySelector(".main-nav a"); // Get the first element matching specified selector(s)
document.querySelectorAll('.post-content p'); // Get all elements matching specified selector(s)
```

=====================================================================================
### Access and Change Elements
=====================================================================================
### Access and Change Classes
=====================================================================================
### Access and Change Attributes
=====================================================================================
### Add DOM Elements
=====================================================================================
### Apply inline CSS to an Element
