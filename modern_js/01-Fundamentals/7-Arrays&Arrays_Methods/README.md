```js
//Create some array
const numbers = [43,56,44,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruits = ['apple', 'Banana', 'Orange', 'pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;


// Get array Length
val = numbers.length;
// Check if is Array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];

// Insert into Array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAY
//Add on to end
numbers.push(250);
//Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatentae array
val = numbers.concat(numbers2);

// SORTING ARRAYS
val = fruit.sort();
val = numbers.sort(); // it sorts based on 1st digit

// Use the "compare function"
val = numbers.sort(function(x,y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x,y){
  return x - y;
});

// Find Under 50
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

// Find Above 50
function above50(num){
  return num > 50;
}

val = numbers.find(above50);

console.log(numbers);
console.log(val);


```
