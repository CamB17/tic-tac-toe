var players = []

function joinGame(playerName) {
	var playerNumber = player.length;
	players[playerName] = {
		name: playerName,
		number: playerNumber
	};
	players[playerNumber] = players[playerName];
}

joinGame('player0');
joinGame('player1');
