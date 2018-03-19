## OOP ES6
### Constructors & The 'this' keyword
```js
// Object literal
const mohanad = {
  name: 'Mohanad',
  age: 28
}

// Constructor Method/function (Should always start with capital letter)
function Person(name, dob){
  // 'this' keyward refers to the current instance of the object
  this.name = name
  // this.age = age
  this.birthday = new Date(dob)
  // To calculate the age of the person from given date of birth
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

// To instantiate an object Person
const mohanad = new Person('Elhag', 39)
const waddah = new Person('Waddah', 25)


const mohanad = new Person('Mohanad', '2-3-1989')
console.log(mohanad.calculateAge())

```
### Built-in constructors
Not recommended at all
- String
```js
const name1 = 'Mohanad' // string
const name2 = new String('Mohanad') // object

console.log(typeof name1) // string
console.log(typeof name2) // object

if(name1 === 'Mohanad') {
  console.log('String')
} else {
  console.log('Object')
}
```
- Number
```js
const num1 = 5 // number
const num2 = new Number(5) // object
```
- Boolean
```js
const bool1 = true; // boolean
const bool2 = new Boolean(true) // Object
```

- Function
```js
const getSum1 = function(x,y) {
  retrun x + y
} // function

const getSum2 = new Function('x','y', 'return 1 + 1') // Object
```

- Object
```js
const mohanad1 = {
  name: 'Mohanad'
}
const mohanad2 = new Object({
  name: 'Mohanad'
})
```

- Array
```js
const arr1 = [1,2,3,4,5]
const arr2 = new Array(1,2,3,4,5)
```

- Regular Expressions
```js
const re1 = /\w+/ // looking for a word character that appers one time or more
const re2 = new RegExp('\\w+') 
```

### Prototype
- Object.prototype
```js
// Person.prototype
function Person(firstName, lastName, dob){
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob)
  // this.calculateAge = function() {
  //   // const diff = Date.now() - this.birthday.getTime()
  //   // const ageDate = new Date(diff)
  //   // return Math.abs(ageDate.getUTCFullYear() - 1970)
  // }
}

// Calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// Position Title
Person.prototype.positionTitle = function(newPositionTitle) {
  this.newPositionTitle = newPositionTitle
}

const mohanad = new Person('Mohanad', 'Elhag', '2-3-89')
const mohamad = new Person('Mohamed', 'Elhag', '20-12-91')
console.log(mohanad.calculateAge()) // 29
console.log(mohanad.getFullName()) // Mohanad Elhag
mohanad.positionTitle('Software Engineer')
// -Proto-
console.log(mohanad.hasOwnProperty('a'))
```
### Prototypal Inheritance
```js
// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe')

// console.log(person1.greeting())

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  // call is a function that allow us to call another function in a current context
  Person.call(this, firstName, lastName)
  this.phone = phone
  this.membership = membership
}
// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer

// create Customer
const customer1 = new Customer('Mohanad', 'Elhag', '555-555-555', 'Standart')
// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName} welcome to out company`
}
console.log(customer1.greeting()) // Will through an error because it is not inherit a prototype
```
### Using Object.create
### ES6 Classes
### Sub Classes