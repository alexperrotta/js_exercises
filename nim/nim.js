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
	console.log(rocks);
}


function takeRocks() {
	var playerPrompt = parseInt(prompt('How many rocks do you want to take? You can only take 1, 2, or 3 rocks from the pile.'));

	if (playerPrompt === '1') {
		;
	} else if (playerPrompt === '2') {
		;
	} else if (playerPrompt === '3') {
		;
	} 
	
	console.log(printRocks());
}

takeRocks();



function checkVictory() {

}




