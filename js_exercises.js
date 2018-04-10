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

/* function splitAmount(amount, service, people) {
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
splitAmount(100, "good", 2); */


/*
Write a function printNumbers which is given a start number and an end number. It will print the numbers 
from one to the other, one per line:

> printNumbers(1, 10)
1
2
3
4
5
6
7
8
9
10 */
 

/* function printNumbers(start, end) {
  console.log();
}

printNumbers(1, 10); */



/*
Write two versions of the above function. One using a while loop and the other using a for loop. */

/* function printNumbers(start, end) {
  while () {
    console.log(start, end);
  }
}

printNumbers(1, 10); */




/*
Print a Square
Write a function printSquare which is given a size and prints a square of that size using asterisks.

> printSquare(5)
*****
*****
*****
*****
***** */

function printSquare(column, row) {
  for (var i = 0; i < column; i++){ // iterates rows
    for (var j = 0; j < row; j++) { // iterates * in row
      console.log("*");
    }
    console.log('\n');
  }
}

printSquare(5, 5);



/* 
Print a box
Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

> printBox(6, 4)
******
*    *
*    *
****** */

function printBox(width, height) {
  for ( i=0; i < width; i++); 
    {
      for( j=0; j < height; j++)
      {
        console.log("*");
      }
        console.log("\n");
    }
} 

console.log(printBox(6, 4));





/*
Print a Banner
Write a function printBanner which is given some text and prints a banner with a border surrounding the text. 
The border has to stretch to the length of the text.

> printBanner('Welcome to DigitalCrafts')
****************************
* Welcome to DigitalCrafts *
****************************  */










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





/* Caesar Cipher
Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

> cipher('Genius without education is like silver in the mine')
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar' */





/* 
Caesar Cipher 2
Write a function decipher which is given a string, an offset, and returns the original message.

> decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
'Genius without education is like silver in the mine' */





/*
Leetspeak
Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

A => 4
E => 3
G => 6
I => 1
O => 0
S => 5
T => 7
> leetspeak('Leet')
l337 */







/* 
Long-long Vowels
Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

> longLongVowels('Good')
'Goooood'
> longLongVowels('Cheese')
'Cheeeeese'
> longLongVowels('Man')
'Man'  */







/*
Sum the numbers
Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

> sumNumbers([1, 4, 8])
13 */






/* 
Just the positives
Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

> positiveNumbers([1, -3, 5, -3, 0])
[1, 5, 0]
> positiveNumbers([1, 2, 3])
[1, 2, 3]
> positiveNumbers([-1, -2, -3])
[] */




/* 
Matrix Addition
Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

> matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
[ [ 6, 5 ], [ 3, 4 ] ] */





/* 
Matrix Multiplication
Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro

> matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
[ [22,  8], [27, 10] ] */








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






















