## Type Conversion
```js
let val;

// Number to string
val = 5;
val = String(5);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);


// toString()
val = (5).toString();
val = (true).toString()

// String to number
val = Number('5'); // 5
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('hello'); // NaN not a number


val = parseInt('100.300'); // A method to parse into an integer
console.log(val.toFixed(0)); // 100
val = parseFloat('100.300')
console.log(val.toFixed(2)); // 100.30



// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // only work with strings
console.log(val.toFixed()); // only works with number
```
