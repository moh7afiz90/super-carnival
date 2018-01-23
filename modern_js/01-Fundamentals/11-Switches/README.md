## Switches
- Another way to validate conditions
```js
const color = 'red';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'Blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = 'SUN'
    break;
  case 1:
    day = 'MON'
    break;
  case 2:
    day = 'TUE'
    break;
  case 3:
    day = 'WEN'
    break;
  case 4:
    day = 'THU'
    break;
  case 5:
    day = 'FRI'
    break;
  case 6:
    day = 'SUT'
    break;
}
console.log(`Today is ${day}`);
```
