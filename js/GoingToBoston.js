"use strict"

let rolls = 0;
let round = 0;
let player1Score = 0;
let player2Score = 0;
let player1Wins = 0;
let player2Wins = 0;
let totalRounds = 0;
let roundsPlayed = 0;
let winningPlayer = "";
let roundEnd = false;
let gameEnd = false;

document.querySelector(".button_rounds").addEventListener("click", function(){
	gameEnd = false;
	player1Wins = 0;
	player2Wins = 0;
	winningPlayer = "";
	roundEnd = false;
    totalRounds = Number(document.querySelector(".rounds").value);
    document.querySelector(".totalRounds").textContent=`Total rounds: ${totalRounds}`
     document.querySelector(".dice1").classList.remove("hidden");
     document.querySelector(".dice2").classList.remove("hidden");
     document.querySelector(".dice3").classList.remove("hidden");
     document.querySelector(".dice4").classList.remove("hidden");
     document.querySelector(".dice5").classList.remove("hidden");
     document.querySelector(".dice6").classList.remove("hidden");
     document.querySelector(".button_roll").classList.remove("hidden");

});


document.querySelector(".button_roll").addEventListener("click", function(){
    let min = Math.ceil(1);
    let max = Math.floor(6);
    rolls++;
    

    switch (rolls) {
	case 1:
    round++;
    roundsPlayed++;
    document.querySelector(".dice1").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice2").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice3").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice4").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice5").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice6").textContent=Math.floor(Math.random() * (max - min) + min);
	break;
	case 2:	
    document.querySelector(".dice1").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice2").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice3").textContent=0;
    document.querySelector(".dice4").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice5").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice6").textContent=0;
	break;
	case 3:
    document.querySelector(".dice1").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice2").textContent=0;
    document.querySelector(".dice3").textContent=0;
    document.querySelector(".dice4").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice5").textContent=0;
    document.querySelector(".dice6").textContent=0;
	if (round<totalRounds) {
		rolls=0;
	} else {gameEnd = true;} 
	roundEnd = true;
	break;
    }


    let d1 = Number(document.querySelector(".dice1").textContent);
    let d2 = Number(document.querySelector(".dice2").textContent);
    let d3 = Number(document.querySelector(".dice3").textContent);
    let d4 = Number(document.querySelector(".dice4").textContent);
    let d5 = Number(document.querySelector(".dice5").textContent);
    let d6 = Number(document.querySelector(".dice6").textContent);
 
    if (roundEnd == false){
	    player1Score += d1+d2+d3;
    	player2Score += d4+d5+d6;
	} else {
	if (player1Score > player2Score) {player1Wins++;} else if (player2Score > player1Score) {player2Wins++;}
	roundEnd = false; player1Score = 0; player2Score = 0;
	}

    if (player1Wins > player2Wins) {
	winningPlayer = "1";
    } else if (player2Wins > player1Wins){
	winningPlayer = "2";
    } else {
	winningPlayer = "No"
    }

    if (gameEnd){
     document.querySelector(".dice1").classList.add("hidden");
     document.querySelector(".dice2").classList.add("hidden");
     document.querySelector(".dice3").classList.add("hidden");
     document.querySelector(".dice4").classList.add("hidden");
     document.querySelector(".dice5").classList.add("hidden");
     document.querySelector(".dice6").classList.add("hidden");
     document.querySelector(".button_roll").classList.add("hidden");
     document.querySelector(".dice1").textContent=0;
     document.querySelector(".dice2").textContent=0;
     document.querySelector(".dice3").textContent=0;
     document.querySelector(".dice4").textContent=0;
     document.querySelector(".dice5").textContent=0;
     document.querySelector(".dice6").textContent=0;

	rolls = 0;
	round = 0;
	totalRounds = 0;
	roundEnd = false;

    }

    document.querySelector(".score1").textContent=`Player 1 score: ${player1Score}`;
    document.querySelector(".score2").textContent=`Player 2 score: ${player2Score}`;
    document.querySelector(".currentRound").textContent=`Round ${round}`;
    if (gameEnd) {document.querySelector(".winningPlayer").textContent=`${winningPlayer} wins!!!`} else {document.querySelector(".winningPlayer").textContent=`${winningPlayer} player is winning!`};
    document.querySelector(".wins1").textContent=`Player 1 wins: ${player1Wins}`;
    document.querySelector(".wins2").textContent=`Player 2 wins: ${player2Wins}`;
    document.querySelector(".roundsPlayed").textContent=`Rounds played: ${roundsPlayed}`;
}); 
