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

ItemCtrl.add({id: 1, name: 'John'}); // Item Added...
console.log(Item.get(1)); {id: 1, name: 'John'}

```
- The main different between Standard Module Pattern and Revealing Module Pattern:
1. We returning object literal that directly reveals methods that are inside the module.
2. Revealing pattern looks cleaner, but module pattern allow you do more
