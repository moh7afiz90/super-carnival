### Loops
-
=====================================================================================
### Looping through arrays
-
=====================================================================================
### Break and continue loops
- Break: Terminate the current loop
Example: Game of Chance, [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
```js
const MIN = 0;
const MAX = 36;
var testNumber = 15;
var i = 1;

while (MAX) {
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    // The loop will continue until the it hits testNumber and break the code and finally takes us outside the loop.
    if (randomValue == testNumber) {
        break;
    }
    // Once the loop hits break it won't console.log the next, rather it will go outside the
    console.log("Round " + i + ": " + randomValue);
    i++;
}

console.log("The script went " + i + " rounds before finding " + testNumber + ".");

```
- Continue: Terminate the current iteration of the loop
Example: Prime Number, helps us finds number from 0 to 100, which mean the only can be divided by itself or 100
```JavaScript
const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    if (result == false) {
      continue;
    }
    console.log(i + " is a prime number.");
}

```
Rule of Thumb:
Any time you need to Terminate a loop if something specific happenes use break.
and anytime you need to avoid a certain condition within a loop use continue.
