
// simple conditional exercise
function peopleWithAgeDrink(old) {
    if(old <14){
      return "drink toddy"
    }
    else if(old <  18){
      return "drink coke"
    }
    else if(old < 21){
      return "drink beer"
    }
    else{
      return "drink whisky"
    }
  };


// returns a hello string to the name entered
  function sayHello(name) {
    return `Hello, ${name}`
  }


  function move (position, roll) {
    return position + (2 * roll)
  }



  // returns a size length string with alternating 0s and 1s starting always with 1
  function stringy(size) {
    let str = ''
    if(size >= 1){
      str += 1
    }
    for(let i = str.length; i < size; i++) {
      str += i % 2 ? 0 : 1
    }
  return str
  }

// gets and rounds down a test mark average given an array of positive ints
  function getAverage(marks){
    return Math.floor((marks.reduce((a, b) => a + b)) / marks.length)
  }