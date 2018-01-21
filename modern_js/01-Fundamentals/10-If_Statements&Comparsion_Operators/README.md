## If Statement Syntax
```js
// if(something){
//   do something
// } else {
//   do something else
// }
```

## If Statement usage
```js
const id = 100;

// EQUAL TO
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
```

## To test variable whether is defined or undefined
```js
if (id == 100) {
  console.log(`The ID is ${id}`); // Uncaught reference error
} else {
  console.log('NO ID');
}

// The correct way
if (type id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// OUTPUT: NO ID
```

## Greater OR Less Than
```js
const id = '100';
if (id = 100) { // id >= 100 OR id <= 100
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
```

## IF ELSE
```js
const color = 'red';
if (color === 'red') {
  console.log('Color is red');
} else if {
  console.log('Color is blue');
} else if {
  console.log('Color is Yellow');
} else {
  console.log('Color is not Yellow or blue or red');
}
```

## Logical Operators
```js
const id = '100';
const name = 'Steve';
const age = '20';

// AND &&
if(age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT': 'INCORRECT'); // INCORRECT

// WITHOUT BRACES not recommended
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
```
