console.log("script executed");

/* Write a function hello which given a name, says hello to the name. Use the following template:

function hello(name) {
  // put your code here
}
hello('Mustache');

Make the above program print

Hello, Mustache! */

function hello(name) {
    var greeting = 'Hello, ' + name + '!';
    return greeting;
  }
  hello('Mustache');

/*  Hello, you! Part 2
Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously. */

function hello(name) {
    var greeting = 'Hello, ' + name + '!';
    if (name != 'undefined') {
        return 'Hello, world!'
    } else {
        return greeting;
    }
  }
  hello();



  /* Tip Calculator
Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10%
> tipAmount(100, 'good')
20
> tipAmount(40, 'fair')
6  */

function tipAmount(amount, service) {
  // amount is an integer/float value for a bill
  // service is a string, either good, fair and poor
  if (service == "bad") {
    return 0.1 * amount; 
  } else if (service == "fair") {
    return 0.15 * amount; ;
  } else if (service == "good") {
    return 0.2 * amount; ;
  }

  // Must return the tip amount based off of amount and service
}

var tip = tipAmount(100, "good");

console.log(tip);


/* Factor a Number
Write a function factors which is given a number and returns an array containing all its factors. */

function factors(number) {
  var array = []; 

  // We need to loop through all numbers from 0 to "number"

  for (var i = 0; i <= number; i++) {
      // And check if they are a factor, i is a factor of "number"
    if (number % i === 0) {
       // And add to the array
      array.push(i);
    }
  }
  return array;
}
// Call the function
console.log(factors(24));



/* Tic Tac Toe
Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

returning 'O' if O makes a row returning 'X' if X makes a row return null if neither makes a row  */

var testBoard = [["X", null, "O"], 
                 ["X", null, "X"], 
                 ["O", null, "O"]];

function ticTacToe(board) {

    var row1 = board[0]; // ["X", null, "O"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; // ["O", null, "O"]
    var col1 = [ board[0][0], board[1][0], board[2][0] ];  // ["X", "X", "O"]
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  // [null, null, null]
    var col3 = [ board[0][2], board[1][2], board[2][2] ];  // ["O", "X", "O"]
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; // ["X", null, "O"]
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; // ["O", null, "O"]

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length ; i++) {

        var winCondition = winConditions[i]; // ["X", null, "O"]

        var string = "" + winCondition[0] + winCondition[1] + winCondition[2]; 

        if (string == "XXX") {
            return "X wins";
        } else if (string == "OOO") {
            return "O wins";
        }
    }

    return "No one wins" 
}


console.log(ticTacToe(testBoard));