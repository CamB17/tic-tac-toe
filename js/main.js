//var players = []
<!--Cannot get players to work-->
//function joinGame(playerName) {
	//var playerNumber = player.length;
	//players[playerName] = {
		//name: playerName,
		//number: playerNumber
	//};
	//players[playerNumber] = players[playerName];
//}

//joinGame('player0');
//joinGame('player1');

//console.log('-- by player number --');
//console.log(players[0]);
//console.log(players[1]);

//console.log('-- by player name --');
//console.log(players['player0'])
//console.log(players['player1']);

//console.log('-- forEach on the array --');
//players.forEach(function(p) {
	//console.log(p);
//});

        var cp1 = 1;

        function displayMarker(allSquares) {

            if (document.getElementById(allSquares).innerHTML != "") {
                alert("Choose another square");
            }
            else {

                if (cp1 == 1) {
                    document.getElementById(allSquares).innerHTML = "X";
                    cp1 = 2;
                }

                else {
                    document.getElementById(allSquares).innerHTML = "O";
                    cp1 = 1;
                }
            }
            checkEmpty();
        }

        function checkEmpty() {

            var anyEmpty = false;
            for (var i = 1; i <= 9; i++) {
                if (document.getElementById('square' + i).innerHTML == "") {
                   anyEmpty = true;
                }
            }

            if (!anyEmpty)
                alert("All squares filled!");

             resetButton();
        };
        	<!--Cannot get reset button to work-->
        //function resetButton() {

           // var button = document.createElement("button");
           // button.innerHTML = "Reset";



           // button.addEventListener("click", function () {
                //alert("Board Reset");
            //});
        //}