```js
const person = {
  firstName: 'Mohanad',
  lastName: 'Hafiz',
  age: 28,
  email: 'moh.7afiz@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Abu Arish',
    state: 'GIZ'
  },
  getBirthYear: function () {
    return 1989;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;

console.log(val);

// Loop through an array
const people = [
  {name: 'John', age: 30},
  {name: 'Steve', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
```
