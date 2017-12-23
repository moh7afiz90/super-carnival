## DOM Selectors For Multiple Elements

### By ClassName
```js
const items = document.getElementsByClassName('collection-item');
console.log(items); // Array of collection-item class
console.log(items[0]); // Item of index 0
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getE
```
