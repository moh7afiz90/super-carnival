## Window Object

- Methods
```js
console.log(123); //123
window.console.log(123); //123

// Alert
alert('Hello World'); // Hello World
window.alert('Hello World'); // Hello World

// Prompt 'Hello'
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure')){
  console.log('Yes');
} else {
  console.log('No');
}
```

- Objects
```js
let val;

// The current Outer height and width
val = window.outerHeight; // 863
val = window.outerWidth; // 561

// Inner current height and width (inside the scroll bars only the webpage without counting the whole window browser)
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY; // Vertical
val = window.scrollX; // horizontal

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';

// Reload
window.location.reload(); // It will keep reloading the page
console.log(val);

// History Object
window.history.go(-1); // To go the pervious page; -2 the page pervious that
val = window.history.lengths // 6; sites behind us


// Navigator object (it deals with browser itself)
val = window.navigator;
val = window.navigator.appName; // Netscape
val = window.navigator.appVersion; // Netscape
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
```
