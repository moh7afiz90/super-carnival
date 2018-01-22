## Function Declarations
```js
// 1st
function greet(){
  console.log('Hello');
}

greet(); // Hello

// 2nd
function greet(){
  return 'Hello';
}

console.log(greet()); // Hello

// 3rd
function greet(firstName, lastName) {
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));

// To set default value
function greet
(
  firstName = 'John', lastName = 'Doe' // New Way
)
{
  // old way
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  return 'Hello ' + firstName + ' ' + lastName;
}

```


## Function Expressions
```js
const square = function(x = 3 // The default value){
  return x*x;
};

console.log(square(8));
```
## Immediately Invokable function expression  - IFEs
```js
(function(){
  console.log('IFE Ran...');
})();

// Example
(function(name){
  console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22)
```
