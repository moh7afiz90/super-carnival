### Local & Session Storage
### Diff b/w Local Storage & Session
- local storage will stay until user manually clear it out through setting or through program
- local session will stay until user closes the browser.

### Set local storage items
```js
// localStorage.setItem('name', 'John')
// localStorage.setItem('age', '40')

// Remove from storage
localStorage.removeItem('name')

// get from storage
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')

// clear local storage
localStorage.clear();

console.log(name);
```

### Set session storage items
```js
sessionStorage.setItem('name', 'Mia')
```
