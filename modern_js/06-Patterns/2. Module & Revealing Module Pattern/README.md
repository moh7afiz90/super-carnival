## Module & Revealing Module Pattern

- General Structure
```js
(function(){
  // Declare private variables and functions
  return {
    // Declare public variables and functions
  }
})();
```

- Example: Standard Module Pattern
```js
const UICtrl = (function(){
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText(); // Hello World
console.log(UICtrl.text); // undefined
```

- Revealing Module Pattern
```js
const ItemCtrl = (function() {
  let _data = [];
  // Underscore says it is a private variable
  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();
```
