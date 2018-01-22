## Loops
- Loop is an instruction that repeats itself till specific condition is reach.
- Loops are used to ran the same block of code with different values each time.
- The general ways to write loops are:

### For Loop
```js
// Syntax
for( declaration of variable ; condition; increment of variable)
// must use either let or var...you can not use const
for(let i = 0; i < 10; i++ ){
  if(i === 2){
    console.log('2 is my favorite number');
    continue; // To escape Number 2 and move to Number 3
  }

  if( i === 5){
    console.log('Stop the loop');
    break; // To stop the loop
  }
  console.log('Number '+ i);
}
```
### While Loops
```js
let i = 0;
while(i < 10){
  console.log('Number ' + i);
  i++ ;
}
```

### Do..While Loops
```js
let i = 0;

do {
  console.log('Number '+ i);
  i++''
}
while(i < 10)
```

#### The diff b/w While loop & Do...While Loops is Do..while loops is going to run at least once regardless of the condition.


### Using loops through arrays
```js
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// Ex: 1
for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// Ex: 2, Recommended way when dealing with arrays
cars.forEach(function(car, index){
  console.log(`${index} : ${car}`);
})
```

### Maps
-
```js
const users = [
  { id: 1, name: 'John'},
  { id: 2, name: 'Sara'},
  { id: 3, name: 'Karen'},
  { id: 4, name: 'Doe'}
]

const ids = users.map(function(user){
  return user.idl
});

console.log(ids); // [1,2,3,4]
```

### For In Loop
```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: '40'
}

for(let x in user){
  console.log(x);
  // firstName
  // lastName
  // age
  console.log(`${x}: ${user[x]}`);
  // firstName : John
  // lastName : Doe
  // age : 40
}
```
