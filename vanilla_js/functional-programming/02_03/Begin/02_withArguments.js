// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02

function callWith2Arg(arg1, arg2, func) {
  return func(arg1,arg2)
}

(callWith2Arg(1, 2, add))

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}
