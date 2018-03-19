### Traversing The DOM (Moving up & down)
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
