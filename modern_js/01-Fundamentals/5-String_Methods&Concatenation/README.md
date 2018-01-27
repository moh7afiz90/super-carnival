```js
const firstName = 'Mohanad';
const lastName = 'Elhag';
const age = 28;
const str = 'Hello there my name is Mohanad';
const tags = 'web design, web development, web programming';

let val;

val = firstName + lastName; // MohanadELhag

// Concatenation
val = firstName + ' ' + lastName; // Mohanad Elhag

// Append
val = 'Mohanad ' ; // Mohanad
val = 'Elhag'; // Mohanad Elhah

// with append

val = 'Mohanad '; // Mohanad
val += 'ELhag'; //  Mohanad Elhah

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// Hello, my name is Mohanad and I am 28

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length; // 7
// We do not need braces length() since we are dealing with property not a method


// concat
val = firstName.concat(' ', lastName); // Mohanad Elhag

// Change case
val = firstName.toUpperCase(); // MOHANAD
val = lastName.toUpperCase(); // ELHAG

val = firstName[0]; // M
val = firstName[1]; // O


// IndexOf()
val = firstName.indexOf('a'); // 3
val = firstName.lastIndexOf('a'); // 5
// If you tried to find a character which is not on the string it will return -1


// charAt()
// Opposite to IndexOf()
val = firstName.charAt('2'); // h
// To get the last of any given character
val = firstName.charAt(firstName.length - 1); // d

// substring()
val = firstName.substring(0, 4); // Moha

// slice()
val = firstName.slice(0, 4); // Moha
val = firstName.slice(-3); // nad

// split()
val = str.split('  ')
val = tags.split(','); // ['web design', 'web development', 'programming']

// Replace()
val = str.replace('Mohanad', 'Waddah'); // Hello there my name is Mohanad

// includes()
val = str.includes('Hello'); // true
val = str.includes('bye'); // false


console.log(val);
```
