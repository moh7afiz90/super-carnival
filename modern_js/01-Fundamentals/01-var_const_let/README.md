## var
```js
var name = 'John Doe';
console.log(name); // John Doe

name = 'Steve Smith';
console.log(name); // Steve Smith

// Init var
var greeting;
console.log(greeting); // undefined
greeting = 'Hello';
console.log(greeting); // Hello

// variables can init with letters, number, _, $
// can not start with Numbers

// Multi word variables
var firstName = 'John'; // Camel Case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
```

## let
- it has the same functionality as var on global scope
```js
let name = 'John Doe';
console.log(name); // John Doe

name = 'Steve Smith';
console.log(name); // Steve Smith

```

## const
```js
const name = 'John';
console.log(name);
// can not reassign
// have to assign a value

const person = {
  name: 'Mohanad',
  age: '27'
}

// We can mutate the properties on PERSON but we can reassign the variable person

person.name = 'Sara';

console.log(person.name); // Sara


const numbers = [1,2,3,4,5]
console.log(numbers); // [1,2,3,4,5]
numbers.push(6);
console.log(numbers); // [1,2,3,4,5,6]



```
