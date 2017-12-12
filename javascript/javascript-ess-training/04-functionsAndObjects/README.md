### Functions and Objects

#### Functions in Javascript

- Three Types of Functions
1. Named Functions
##### Example:
```js
function multiply() {
  var result = 3 * 8;
  console.log("3 multiplied by 4 is ", result);
}
```
2. Anonymous Functions
##### Example:
```js
var divided = function() {
  var result = 3 / 4;
  console.log("3 divided by 4 is ", result);
}
```
3. Immediately invoked function expressions
##### Example:
```js
(function(){
  var result = 12 / -.75;
  console.log("12 divided by 0.75 is ", result);
}())
```
=====================================================================================

#### Build a basic function

##### Example
```js
function findBiggestFraction() {
  a > b ? console.log("a: ", a): console.log("b: ", b);
}

var a = 3/4;
var b = 5/7;

findBiggestFraction(); // a: 0.75
```

```js
function findBiggestFraction() {
  a > b ? console.log("a: ", a): console.log("b: ", b);
}

findBiggestFraction(); // won't work because a & b are not defined when the function is called, the order is important in JS

var a = 3/4;
var b = 5/7;

```
=====================================================================================

#### Add arguments to the function
- We add arguments to a function to make reusable as many times as possible as shown int he example below

##### Example
```js
function findBiggestFraction( a , b ) {
  // Similar to the pervious example but with different "if" style
  if (a > b) {
    console.log("a: ", a);
  } else {
    console.log("b: ", b);
  }
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction, secondFraction); // a: 0.75
findBiggestFraction(7/16, 13/25); // b: 0.52
findBiggestFraction(1/2, 3/4); // a: 0.75
```
=====================================================================================

#### Return values from a function
- In most cases you want the function to do something and return the value back to you, so you can process before you display the result.

```js
function findBiggestFraction(a,b) {
  var result;
  a > b ? result = ["firstFraction: ", a]: result = ["secondFraction: ", b]
  return result
}

var firstFraction = 3/4;
var secondFraction = 5/7;

// Options to call the function
console.log(findBiggestFraction(firstFraction,secondFraction));
// or
var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log(fractionResult);
// This is useful so we can add context
console.log("First Fraction Result: ", firstFraction);
console.log("Second Fraction Result: ", secondFraction);
console.log("Fraction "+ fractionResult[0]+ " with a value of  "+ fractionResult[1]+ " is the biggest!");
```
=====================================================================================

#### Anonymous Functions

```js
var a = 5/7;
var b = 18/25;

var theBiggest = function() {
  var result;
  a>b ? result = ["a",a]: result = ["b",b];
  console.log(result);
}

theBiggest();
```
OR by returning the value

```js
var a = 5/7;
var b = 18/25;

var theBiggest = function() {
  var result;
  a>b ? result = ["a",a]: result = ["b",b];
  return result;
}

console.log(theBiggest());
```
By using arguments

```js
var theBiggest = function(a,b) {
  var result;
  a>b ? result = ["a",a]: result = ["b",b];
  return result;
}

console.log(theBiggest(7/9, 13/25));
```

=====================================================================================

#### Immediately invoked functional expressions
- The benefit of this type of functions is runs Immediately where is located and produces a direct output.

```js
var theBiggest = (function(a,b) {
  var result;
  a>b ? result = ["a",a]: result = ["b",b];
  return result;
})(7/9, 13/25);

console.log(theBiggest);
```
OR

```js
var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest = (function(a,b) {
  var result;
  a>b ? result = ["a",a]: result = ["b",b];
  return result;
})(firstFraction, secondFraction);

console.log(theBiggest);
```
=====================================================================================

#### Variable Scope
- Where is in your code the variable is available
- Types of Variable Scope
1. Global Scope
2. Local Scope
- We have a return keyword so we can package up a local value and send some where outside the local scope.
```js
function findBiggestFraction(a,b) {
  console.log("Fraction a:", firstFraction);
  console.log("Fraction b:", secondFraction);

  var result; // Local Scope

  a>b ? result = ["a", a] : result = ["b", b];
  return result
}
var firstFraction = 7/16; // Global Scope
var secondFraction = 13/25; // Global Scope

var fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log("Fraction "+ fractionResult[0]+ " with a value of  "+ fractionResult[1]+ " is the biggest!");

console.log(result); // Undefined because it is a local variable
```
=====================================================================================

#### ES2015: let and const
| Types of Variable | keyword  | usage  |
|:-----------------:|:--------:|:------|
| constant          | const    |Can't be changed once defined |
| let               | let      |Block scope variable, Smaller scope than var |

##### Example
- const
```js
const myConstant = 5;
console.log(myConstant); // 5
myConstant = 6; // Error
```
- let
with Var Keyword
```js
function logScope() {
  var localVar = 2;

  if (localVar) {
    var localVar = "I'm different!";
    console.log("nested localVar: ", localVar); // I'm different
  }
  console.log("logScope LocalVar: ", localVar); // I'm different
}

logScope();
```
with let Keyword
```js
function logScope() {
  let localVar = 2;

  if (localVar) {
    let localVar = "I'm different!";
    console.log("nested localVar: ", localVar); // I'm different
  }
  console.log("logScope LocalVar: ", localVar); // 2
}

logScope();
```

=====================================================================================

#### Make sense of objects
- Objects are data models that allow us to combine properties and methods for a specific data set in a structured way.

##### Example
```js
var course = new Object();
course.title = "Javascript Essential Training";
course.instructor = "Mohanad Elhag";
course.level = 1;
course.published = true;
course.view = 0;

console.log(course);
// Short way to create objects
var course = {
  title: "Javascript Essential Training",
  instructor: "Mohanad Elhag",
  level: 1,
  published: true,
  view: 0,
  updateViews: function() {
    return ++course.view;
  }
}

console.log(course);
```
=====================================================================================

#### Object constructors
- Object constructors are templates for creating objects that we define once and the we can use them again and again.

```js
// defining constructor
function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function () {
    return ++this.views
  }
}

var courses = [
  new Course("Javascript Essential Training", "Mohanad Elhag", 1, true, 0),
  new Course("ES6 Essential Training", "Waddah Elhag", 1, true, 1234);
]


console.log(courses[1].updateViews()); // 1234
```
=====================================================================================

#### Sidebar: Dot and bracket notation
| Dot Notation                                                    | Bracket Notation        |
| --------------------------------------------------------------- |:------------------------|
| course.title                                                    | course["title"]         |
| course.WP: image; JS engine will throw an error in this case    | course["WP:image"]      |  

=====================================================================================

#### Closure

-  Closure is a function inside a function that relies on variables in the outside function to work. [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
