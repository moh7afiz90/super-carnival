## Block Scope
```js
// Global Scope
var a = 1;
let b = 2;
const c = 3;






// Function Scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c); // Function Scope: 4 5 6
}
test();
console.log('Global Scope: ', a, b, c); // Function Scope: 1 2 3



if(true){
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c); // If Scope: 4 5 6
}

console.log('Global Scope: ', a, b, c); // Global Scope 4 2 3



for(let a = 0; a < 10; a++) {
  console.log('Loop: ${a}'); // Loop 0 ...., Loop 9
}
```
