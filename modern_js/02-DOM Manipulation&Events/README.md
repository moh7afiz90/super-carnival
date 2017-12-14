## DOM Manipulation & Events

### What is the DOM?
- Tree of nodes/elements created by the browser. like Body, H1 H2 or any HTML element tag.
- JS can be used to read/write/manipulate to the DOM.
- Object Oriented Representation.

### Examining The Document Object
- Some of the properties or attributes of Document Object Model.

```js
let val; // To get all the HTML document.
val = document; // To get all the HTML array collection for the entire document.
val = document.all; // To access a particular index within the array collection
val = document.all[0] //<html></html>
val = document.all[1] //<head></head>
val = document.all[2] // <meta charset="UTF-8">
// To show the length of an element on a particular document
val = document.all.length; // 43
val = document.head; // <head></head>
val = document.body; // <body></body>
val = document.doctype; // <!DOCTYPE html>
val = document.domain; // 127.0.0.1
val = document.URL; // http://127.0.0.1:5500/index.html
val = document.characterSet; // UTF-8
val = document.contentType; // text/html

console.log(val);
```
- We can use elements without using selectors, it is not recommended though. The recommended way is selectors.

```js
let val;

val = document.forms; // To get all the forms collection on the HTML document.
val = document.forms[0]; // To get the form of index[0]
val = document.forms[0].id; //To get id of the form of index[0]
val = document.forms[0].method; // To get method of the form of index[0] which is get
val = document.forms[0].action;
val = document.links; // To get all the anchor tag
val = document.links[0].id; // To get the anchor tag id
val = document.links[0].id; // To get the anchor tag id
val = document.links[0].className; // To get the string of all classes in that particular anchor tag
val = document.links[0].classList // To get collection the classes list in that particular anchor tag
val = document.links[0].classList[0] // To get specific class list in that particular anchor tag

val = document.images; // To get all the images on the document.

val = document.scripts; // To get all the scripts on the document

val = document.scripts[2].getAttribute('src'); // To get the src of that particular script


console.log(val);
```
- To get an array of all the scripts in the Document.
```js
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scripts.forEach(function(script) {
  console.log(script.getAttribute('src'));
})

```

### DOM Selectors For Single Elements
- Some of the methods of Document Object Model.

### DOM Selectors for Multiple Elements
### Traversing The DOM
### Creating Elements
### Removing & Replacing Elements
### Event Listeners & The Event Object
### Mouse Events
### Keyboard & Input Events
### Event Bubbling & Delegation
### Local & Session Storage
