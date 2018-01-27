## Template Literals
```js
const name = 'Mohanad';
const age = 28;
const job = 'Web developer';
const city = 'Jazan';
let html;

// Without template literals (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job + ' </li><li>City: '+ city + ' </li></ul> '

// Other way

html = '<ul>' +
        '<li>Name: ' + name + '<li>' +
        '<li>Age: ' + age + '<li>' +
        '<li>Job: ' + job + '<li>' +
        '<li>City: ' + city + '<li>' +
        '</ul>'
document.body.innerHTML = html;
// .Mohanad
// .28
// .Web Developer
// .Jazan


// With template literals (es6)
function hello(){
  return 'hello';
}

html =
`
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${ 2 + 2 }</li> // 4
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`

```
