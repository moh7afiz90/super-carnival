## DOM Manipulation
#### Table of Content
1. Exmaining The DOM
2. DOM Selectors for Single Elements
3. DOM Selectors for Multiple Elements
4. Traversing the DOM
5. Creating Elements
6. Removing & Replacing Elements
7. Event Listeners & The Event Object
8. Mouse Events
9. Keyboard & Input Events
10. Event Bubbling & Delegation
11. Local & Session Storage

### Examining The DOM
#### What is the DOM?
- Tree of nodes/elements created by the browser. like Body, H1 H2 or any HTML element tag.
- JS can be used to read/write/manipulate to the DOM.
- Object Oriented Representation.

#### Examining The Document Object
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
### DOM Selectors for Single Elements
- Some of the methods of Document Object Model.

#### ID
- document.getElementById()
```js
document.getElementById('task-title');
```
- Get things from the elements
```js
const taskTitle = document.getElementById('task-title');
taskTitle.id;
taskTitle.className;
```

- Changing styling
```js
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';
```

- Changing content
```js
const taskTitle = document.getElementById('task-title');

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
```
#### Query Selector

- It is much more powerful than getElementById because do not have select element by id only but by everything.

```js
document.querySelector('#task-title');
document.querySelector('.card-title');
document.querySelector('h5'); // If there is more than h5 it will target the first one
document.querySelector('ul li').style.color = 'blue'; // The first li one the list
document.querySelector('li:last-child').style.color = 'red' // To target the last element
document.querySelector('li:nth-child(3)').style.color = 'yellow' // To target the 3rd element.
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // To target the 4th element
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // It will target only the first odd because we are using single query selector.

```
### DOM Selectors For Multiple Elements

#### By ClassName
```js
// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items); // Array of collection-item class
console.log(items[0]); // Item of index 0
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);
```

#### By TagName
```js
// document.getElementsByTagName
let lis = document.getElementsByClassName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collection into array
lis = Array.form(lis);

lis.reverse();

lis.forEach(function(li){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
})

console.log(lis);
```

#### QuerySelectorAll
```js
// document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item')

items.forEach(function(li, index){
  item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

items.forEach(function(li, index){
  li.style.background = '#ccc';
})

for(let i = 0; i < liEven.length, i++){
  liEven[i].style.background = '#f4f4f4'
}

console.log(items)
```
### Traversing The DOM
#### Traversing The DOM (Moving up & down)
```js
let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child') // To select the first item

val = listItem; // The first li child on the list node
val = list; // ul element

// Get child node
val = list.childNode
val = list.childNodes[0]
val = list.childNodes[0].nodeName // #text
val = list.childNodes[0].nodeType // 3
val = list.childNodes[0].nodeType // 1

// 1 - element
// 2 - Attribuute (deprecated)
// 3 - text node
// 8 - comment
// 9 - Document itself
// 10 - DocType

// Get children element nodes
val = list.children
val = list.Children[0]
list.children[1].textContent = 'Hello'

// Children of children
val = list.children[3].children; // [a.delete-item.secondary-content]

// First Child
val = list.firstChild; // #text

console.log(val);
```
### Removing & Replacing Elements on The DOM
- Replace Element
```js
// Create Element
const newHeading = document.createElement('h2')
// Add id
newHeading.id = 'task-title'
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'))
// Get the old heading
const oldHeading = document.getElementById('task-title')
// Parent
const cardAction = document.querySelector('.card-action')
// Replace 
cardAction.replaceChild(newHeading, oldHeading)

```
- Remove Element
```js
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')
// Remove list item
lis[0].remove()
// Remove child element
list.removeChild(lis[3])
```
- Classes & Attributes
```js
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]
//  Classes
let val;

val = link.className // delete-item secondary-content
val = link.classList // [delete-item, secondary-content] DOM Token List
val = link.classList[0] // delete-item
link.classList.add('test') // <a href="#" class="delete-item secondary-content test">..</a>
link.classList.remove('test') // <a href="#" class="delete-item secondary-content">..</a>
val = link

// Attributes
val = link.getAttribute('href') // #
val = link.setAttribute('href', 'http://google.com')
link.setAttribute('title', 'Google')
val = link.hasAttribute('href') // true
val = link.hasAttribute('title') // false
link.removeAttribute('title') 

```

### Event Listeners & The Event Object
- Anonymous function
```js
// 
document.querySelector('.clear-tasks').addEventListener('click',
funtion(e) {
  console.log('clicked');
  e.preventDefualt(e); // To prevent the default behaviour
})
```
- Named function
```js
document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e){
  let val;
  val = e
  // Event Target Element
  val = e.target // To show the element
  val = e.target.id // id
  val = e.target.className // clear-tasks btn black
  val = e.target.classList // [clear-tasks, btn, black]

  e.target.innerText = 'hello' // Inner Button Text = hello
  
  // Event Type
  val = e.type;

  // Timestamp
  val = e.timeStamp

  // Coordinates event relative to the window
  val = e.clientY // Y axis
  val = e.clientX // X axis

  // Coordinates event relative to element
  val = e.offsetY // Y axis relative to the element 'button'
  val = e.offsetX // X axis relative to the element 'button'


  console.log(val)
}

```

### Mouse Events
```js
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
clearBtn.addEventListener('click', runEvent)

// double click
clearBtn.addEventListener('dblclick', runEvent)

// mousedown (click + hold)
clearBtn.addEventListener('mousedown', runEvent)

// mouseup (click + hold and then let go)
clearBtn.addEventListener('mouseup', runEvent)

// mouseenter (When hover the mouse over the card) fires only on parent element
card.addEventListener('mouseenter', runEvent)

// mouseleave (When hover the mouse over the card and move it out) fires only on parent element
card.addEventListener('mouseleave', runEvent)

// mouseover ()
card.addEventListener('mouseover', runEvent)

// mouseout ()
card.addEventListener('mouseout', runEvent)


// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)
}

```
### Keyboard and Inputs Events
```js
const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')
taskInput.value = '' // To clear the input after submmition

form.addEventListener('submit', runEvent)

// Keydown (Pressing Key)
taskInput.addEventListener('keydown', runEvent)

// Keyup (When releasing Key)
taskInput.addEventListener('keyup', runEvent)

// Keypress 
taskInput.addEventListener('keypress', runEvent)


// focus
taskInput.addEventListener('focus', runEvent)
// blur
taskInput.addEventListener('blur', runEvent)
// cut
taskInput.addEventListener('cut', runEvent)
// paste
taskInput.addEventListener('paste', runEvent)
// Input (General way to fire the event)
taskInput.addEventListener('input' runEvent)
// Change (it used with select element)
taskInput.addEventListener('change', runEvent)



function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`)
  // Data binding like Angular
  heading.innerText = e.target.value
  // Get input value
  console.log(taskInput.value)


  e.preventDefault()
}
```
### Event Bubbling & Delegation
- Event Bubbling is
