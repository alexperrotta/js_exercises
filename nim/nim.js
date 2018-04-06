console.log("Hello. Let's play NIM.");

/* Instructions:
Here are the rules for NIM:

There are two players that take turns
There are 16 rocks in a pile between the two players
On your turn, you can choose to remove 1, 2, or 3 rocks from the pile. After you make your choice, 
your turn is over
The winner is the player that takes the last rock from the pile  */


var rocks = 16;

var turn = 'player 1';


function takeRocks() {
	var numRocksToRemove = parseInt(prompt('How many rocks do you want to take? You can only take 1, 2, or 3 rocks from the pile.'));

	if (numRocksToRemove === 1) {
		rocks = rocks - 1;
	} else if (numRocksToRemove === 2) {
		rocks = rocks - 2;
	} else if (numRocksToRemove === 3) {
		rocks = rocks - 3;
	} /* else {
		console.log('Invalid response. Try again.')
	} */ 
	switchPlayers();
	console.log("It's " + turn + "'s turn.");
	printRocks();
}


function switchPlayers() {
    if (turn == 'player 1') {
        turn = 'player 2';
    } else {
        turn = 'player 1';
    }
}

function printRocks() {
	console.log("Here's how many rocks there are: " + rocks);
	console.log("It's " + turn + "'s turn.");
}


while (rocks > 0) {
	takeRocks();
}


function whoWins() {
	if (turn === 'player 1' && rocks === 0) {
		console.log('Player 1 wins!');
	} else if (turn === 'player 2' && rocks === 0) {
		console.log('Player 2 wins!');
	} 
}
  



/* Notes from class:

var isPlayerOnesTurn = true;

var pebbles = 16; // easier to do the math



*/



