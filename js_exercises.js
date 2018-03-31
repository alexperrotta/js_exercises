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




  /* Madlib
  Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
  
  Example:
  
  > madlib('Anushka', 'art');
  'Anushka's favorite subject in school is art.' */

function madlib(name, subject) {
  var sentence = name + " 's favorite subject in school is " + subject + ".";
  return sentence;
}

madlib("Harry", "coding");
  





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



/* Tip Calculator 2
Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

> totalAmount(100, 'good')
120
> totalAmount(40, 'fair')
46 */

function totalAmount(amount, service) {
  if (service == "bad") {
    return (0.1 * amount) + amount; 
  } else if (service == "fair") {
    return (0.15 * amount) + amount;
  } else if (service == "good") {
    return (0.2 * amount) + amount;
  }
}
totalAmount(100, "good");



/* Tip Calculator 3
Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

> splitAmount(100, 'good', 5)
24
> splitAmount(40, 'fair', 2)
23
Print Numbers */

function splitAmount(amount, service, people) {
  function tipAmount(amount, service) {
    if (service == "bad") {
      return 0.1 * amount; 
    } else if (service == "fair") {
      return 0.15 * amount; ;
    } else if (service == "good") {
      return 0.2 * amount; ;
    }

  }
  
  var tip = tipAmount(100, "good");
  var amount = amount;
}

var final = (tipAmount + amount) / people
splitAmount(100, "good", 2);









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





/* Rock Paper Scissors
Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

> rockPaperScissors('rock', 'scissors')
'player 1'
> rockPaperScissors('rock', 'paper')
'player 2'
> rockPaperScissors('paper', 'paper')
'draw'  */

function rockPaperScissors(throw1, throw2) {
  if (throw1 === 'rock' && throw2 === 'scissors') {
    return 'player 1'; 
  } else if (throw1 === 'scissors' && throw2 === 'paper') {
    return 'player 1';
  } else if (throw1 === 'paper' && throw2 === 'rock') {
    return 'player 1';
  } else if (throw2 === 'rock' && throw1 === 'scissors') {
    return 'player 2'; 
  } else if (throw2 === 'scissors' && throw1 === 'paper') {
    return 'player 2';
  } else if (throw2 === 'paper' && throw1 === 'rock') {
    return 'player 2';
  } else if (throw1 === throw2) {
    return 'draw';
  }
}

rockPaperScissors('scissors', 'scissors');







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