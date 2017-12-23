## Constructor & the 'this' keyword
- constructor method/function
```js
// Person constructor
function Person(name){ // Constructor should always start with capital letters
  this.name = name;
  console.log(this);
  // Person {name: "Mohanad"}
  // Person {name: "Hafiz"}
}

// To instantiate an object
const mohanad = new Person('Mohanad');
const hafiz = new Person('Hafiz');
```
- If we use 'this' outside the function it will gives us the window object

```js
function Person(name){
  this.name = name;
}
console.log(this);
// Window Object
```

- More than one argument

```js
function Person(name, age){
  this.name = name;
  this.age = age;
}


const mohanad = new Person('Mohanad', 36);
const hafiz = new Person('Hafiz', 52);

console.log(hafiz);
// Person {name: "Mohanad"}
// Person {name: "Hafiz", 52}
```


- More than one argument

```js
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
}

const mohanad = new Person('Mohanad', '9-19-1990');
console.log(mohanad);
// "Mohanad" , birthday: Thu Mar 10 1981

```

- Constructor with a method
```js
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const mohanad = new Person('Mohanad', '9-19-1990');
console.log(mohanad.calculateAge());
// "Mohanad" , birthday: Thu Mar 10 1981
```
