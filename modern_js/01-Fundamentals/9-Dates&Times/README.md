```js
let val;

const today = new Date(); // If you do not pass any argument by default is going to set it as of today
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1989');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// To manipulate dates
birthday.setMonth(2); // March because of array index started at 0
birthday.setDate(12); // day
birthday.setFullYear(1984) // 1984
birthday.setHours(3) // 3 o'clock
birthday.setMinutes // 30 mins
console.log(val); // Today date and Time
console.log(typeof val); // Object
```
