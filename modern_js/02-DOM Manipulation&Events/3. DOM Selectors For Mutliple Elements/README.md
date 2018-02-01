## DOM Selectors For Multiple Elements

### By ClassName
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

### By TagName
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

### QuerySelectorAll
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
