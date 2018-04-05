console.log("Hello. Let's play NIM.");

/* Instructions:
Here are the rules for NIM:

There are two players that take turns
There are 16 rocks in a pile between the two players
On your turn, you can choose to remove 1, 2, or 3 rocks from the pile. After you make your choice, 
your turn is over
The winner is the player that takes the last rock from the pile  */

var rocks = '* * * * * * * * * * * * * * * *';

var turn = 'player 1';

function printRocks() {
	console.log("Here's how many rocks there are: "+ rocks);
}


function takeRocks() {
	var playerPrompt = parseInt(prompt('How many rocks do you want to take? You can only take 1, 2, or 3 rocks from the pile.'));

	if (playerPrompt === '1') {
		rocks = rocks.pop();
	} else if (playerPrompt === '2') {
		rocks = rocks.pop(2);
	} else if (playerPrompt === '3') {
		rocks = rocks.pop(3);
	} 
	printRocks();
	turn = 'player 2';
}

takeRocks();




function checkVictory() {
	if (turn === 'player 1' && rocks === '*') {
		console.log('Player 1 wins!');
	} else if (turn === 'player 2' && rocks === '*') {
		console.log('Player 2 wins!');
	} else {
		console.log('No one wins');
	}

}

while (checkVictory() == 'No one wins') {
	takeRocks();
}




