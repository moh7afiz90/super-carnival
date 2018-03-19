## Part 1 
## Cotent
- Let, var and const
- if-else statement
- for loop
- for...in loop
- for...of loop
- while loop
- do...while loop
- switch statement
- functions
- map, filter and reduce
- try...catch..finaly block
- break and continue statement
- expressions and operations
- number, string, arrays and objects

### let, var and const
## Loops
### for loop
`
for (var i = 0; i < 10; i++){
  console.log(i)
}

// Students array
let students = [
  {
    name: 'Coolio',
    age: 20,
    grade: 'A+'
  },
  {
    name: 'Mark',
    age: 45,
    grade: 'C+'
  }
]

for (let i; i < students.length; i++) {
  console.log(students[i])
}
`
### forEach loop
`
stuedents.forEach(funtion(student){
  console.log(student)
})
`
### for...in loop
`for...in` is used to iterate over the properties of an object(the object keys)

### for...of loop
`for of` is used to iterate over the values in an iterable.
`
  
`
### ES6 Array methods - map / filter / reduce
With those methods. You can aviod the use of `for` and `forEach` in most situations.
`
const students = [
  { name: "Nick", grade: 10 },
  { name: "John", grade: 15 },
  { name: "Julia", grade: 19 },
  { name: "Nathalie", grade: 9 },
];

const aboveTenSum = students
  .map(student => student.grade) // we map the students array to an array of their grades
  .filter(grade => grade >= 10) // we filter the grades array to keep those 10 or above
  .reduce((prev, next) => prev + next, 0); // we sum all the grades 10 or above one by one
console.log(aboveTenSum) 
// 44 -- 10 (Nick) + 15 (John) + 19 (Julia), Nathalie below 10 is ignored
`js
# map
map method takes an array, does something on its elements and returns an array with the transformed elements.
map will take an array and trasforms that array of the same length, but with each item in that array transformed.

`
const numbers = [0, 1, 2, 3, 4, 5, 6]
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [0, 2, 4, 6, 8, 10, 12]
`
# filter
filter takes an array, decides element by element if it should keep it or not and returns an array with the kept elements only.
filter transofroms an array into a smaller array.
`
const evenNumbers = numbers.filter(number => number % 2 === 0) 
console.log(evenNumber) // [0, 2, 4, 6]
`
# reject
# find
find transforms an array into a single item
# reduce
You can use reduce when you can not find a pre-built method that fits your problem.

`
let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]
// Classical loop
const totalAmount = 0
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
} 

// Reduce Loop
let totalAmount = orders.reduce(function(sum,order){
  return sum + order.amount
},0)
console.log(totalAmount) // 1075
`

