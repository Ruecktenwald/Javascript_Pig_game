/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
var turnRolls = [];
var winningScore;

	


newGame();


document.querySelector('.btn-roll').addEventListener('click', function() {
	
	var dice = Math.floor(Math.random() * 6) + 1;
	turnRolls.push(dice);
	
	var lastRoll = turnRolls[turnRolls.length - 2];

	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	

	if (lastRoll === 6 && dice === lastRoll) {
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = '0';
		turnRolls = [];
		nextPlayer();

	} else if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else { 
		turnRolls = [];
		nextPlayer();
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	
	scores[activePlayer] += roundScore;

	var input = document.querySelector(".winningScore").value;

	if(input) {
		winningScore = input;
	} else {
		winningScore = 100;
	}


	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      if (scores[activePlayer] >= winningScore) {
      	document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      	hideDice();
      	hidePlayBtns();
      	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      } else {
      turnRolls = [];
      nextPlayer();
  }
});

document.querySelector('.btn-new').addEventListener('click', newGame);










function newGame() {
	scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

  hideDice();
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('.btn-hold').style.display = 'block';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
    
};

function hideDice() {
	document.querySelector('.dice').style.display = 'none';
};

function hidePlayBtns() {
	document.querySelector('.btn-roll').style.display = 'none';
	document.querySelector('.btn-hold').style.display = 'none';
};


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';

};


















