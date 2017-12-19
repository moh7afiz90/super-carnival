## DOM Selectors For Single Elements
- Some of the methods of Document Object Model.

### ID
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
### Query Selector

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
