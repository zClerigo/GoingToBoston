"use strict"

let rolls = 0;
let round = 0;
let rollNum = 0;
let player1Score = 0;
let player2Score = 0;
let player1Wins = 0;
let player2Wins = 0;
let totalRounds = 0;
let roundsPlayed = 0;
let winningPlayer = "";
let roundEnd = false;
let gameEnd = false;

let t = 0;
let p1 = 0;
let p2 = 0;

const diceList = document.querySelectorAll("h4");
let min = Math.ceil(1);
let max = Math.floor(6);
function diceNum (selector) {
    return document.querySelector(selector).textContent=Math.floor(Math.random() * (max - min) + min);
}


document.querySelector(".button_rounds").addEventListener("click", function(){
    p1 = 0;
    p2 = 0;
	gameEnd = false;
	player1Wins = 0;
	player2Wins = 0;
	winningPlayer = "";
	roundEnd = false;
    totalRounds = Number(document.querySelector(".rounds").value);
    document.querySelector(".start_roll").disabled= false;
    document.querySelector(".totalRounds").textContent=`Total rounds: ${totalRounds}`
    if(document.querySelector(".rounds").value % 2 !=0){
    
        document.querySelector(".des").classList.remove("hidden");
        document.querySelector(".dice").classList.remove("hidden");
        document.querySelector(".start_roll").classList.remove("hidden");
        document.querySelector(".rounds").disabled= true;
    }else{
        document.querySelector(".rounds").disabled= false;
    }
    document.querySelector(".dice").textContent = 
            `Player 1 rolled ${p1}`;
    

});

document.querySelector(".restart").addEventListener("click", function(){
    console.log("test")
    document.querySelector(".rounds").disabled= false;
    for (let i = 0; i < diceList.length; i++) {
        diceList[i].classList.add("hidden");
      }
    document.querySelector(".des").classList.add("hidden");
    document.querySelector(".dice").classList.add("hidden");
    document.querySelector(".start_roll").classList.add("hidden");
    document.querySelector(".button_roll").classList.add("hidden");
})


document.querySelector(".start_roll").addEventListener("click", function(){
    if(rollNum%2==0){
        p1 = diceNum(".dice")
            document.querySelector(".dice").textContent = 
            `Player 1 rolled ${p1}`;
        rollNum++;
    }else{
        p2 = diceNum(".dice")
            document.querySelector(".dice").textContent = 
            `Player 2 rolled ${p2}`;
        rollNum=0;
    }
    if(p1!=p2 && p1>0 && p2>0){
        for (let i = 0; i < diceList.length; i++) {
            diceList[i].classList.remove("hidden");
          }
        document.querySelector(".button_roll").classList.remove("hidden");
        document.querySelector(".start_roll").disabled= true;
    }
    console.log("p1", p1, "p2", p2, rollNum)
    console.log("abc")
})


document.querySelector(".button_roll").addEventListener("click", function(){
    // let min = Math.ceil(1);
    // let max = Math.floor(6);
    rolls++

    switch (rolls) {
	case 1:
    round++;
    roundsPlayed++;
        if(p2>p1){
            rolls++;
            diceNum(".dice4")
            diceNum(".dice5")
            diceNum(".dice6")
        }else{
                diceNum(".dice1")
                diceNum(".dice2")
                diceNum(".dice3")
        }
	break;

	case 2:	
    round++;
        diceNum(".dice4")
        diceNum(".dice5")
        diceNum(".dice6")
	break;

	case 3:
    round++;
        diceNum(".dice1")
        diceNum(".dice2")
        document.querySelector(".dice3").textContent=0;
    break;

    case 4:
    round++;
        diceNum(".dice4")
        diceNum(".dice5")
        document.querySelector(".dice6").textContent=0;
    break;

    case 5:
    round++;
        diceNum(".dice1")
        document.querySelector(".dice2").textContent=0;
        document.querySelector(".dice3").textContent=0;
    break;

    case 6:  
    round++;
        diceNum(".dice4")
        document.querySelector(".dice5").textContent=0;
        document.querySelector(".dice6").textContent=0;
    
    let newRound = totalRounds*6;
    console.log("round:", round, totalRounds, newRound)
    
	if (round<newRound) {
		rolls=0;
	} else {
        gameEnd=true
    } 
	roundEnd = true;
    document.querySelector(".rounds").disabled= false;
	break;
    }


    let d1 = Number(document.querySelector(".dice1").textContent);
    let d2 = Number(document.querySelector(".dice2").textContent);
    let d3 = Number(document.querySelector(".dice3").textContent);
    let d4 = Number(document.querySelector(".dice4").textContent);
    let d5 = Number(document.querySelector(".dice5").textContent);
    let d6 = Number(document.querySelector(".dice6").textContent);
 
    if (roundEnd == false){
        if(d1>=d2){
            player1Score+=d1;
        }else if(d2>=d3){
            player1Score+=d2;
        }else{
            player1Score+=d3}

        if(d4>=d5){
            player2Score+=d4;
        }else if(d5>=d6){
            player2Score+=d5;
        }else{
            player2Score+=d6}
	} else {
	if (player1Score > player2Score) {player1Wins++;} else if (player2Score > player1Score) {player2Wins++;}
	roundEnd = false; 
    player1Score = 0; player2Score = 0;
	}

    if (player1Wins > player2Wins) {
	winningPlayer = "1";
    } else if (player2Wins > player1Wins){
	winningPlayer = "2";
    } else {
	winningPlayer = "No"
    }

    if (gameEnd){
        console.log("ended")
        for (let i = 0; i < diceList.length; i++) {
            diceList[i].classList.add("hidden");
          }

          document.querySelector(".des").classList.add("hidden");
          document.querySelector(".dice").classList.add("hidden");
          document.querySelector(".start_roll").classList.add("hidden");

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
    p1=0;
    p2=0;
    }

    document.querySelector(".score1").textContent=`Player 1 score: ${player1Score}`;
    document.querySelector(".score2").textContent=`Player 2 score: ${player2Score}`;
    document.querySelector(".currentRound").textContent=`Round ${round}`;
    if (gameEnd) {document.querySelector(".winningPlayer").textContent=`${winningPlayer} wins!!!`} else {document.querySelector(".winningPlayer").textContent=`${winningPlayer} player is winning!`};
    document.querySelector(".wins1").textContent=`Player 1 wins: ${player1Wins}`;
    document.querySelector(".wins2").textContent=`Player 2 wins: ${player2Wins}`;
    document.querySelector(".roundsPlayed").textContent=`Rounds played: ${roundsPlayed}`;
}); 




