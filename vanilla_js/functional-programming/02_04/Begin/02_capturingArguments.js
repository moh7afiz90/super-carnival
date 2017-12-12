// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

function createCounter(count) {
  var count = 0

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

var counterStartingAt5 = createCounter(5)
