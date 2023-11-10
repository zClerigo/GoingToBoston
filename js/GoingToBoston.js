"use strict"

document.querySelector(".button_rounds").addEventListener("click", function(){
    // document.querySelector(".dice1").classList.remove("hidden");
    // document.querySelector(".dice2").classList.remove("hidden");
    // document.querySelector(".dice3").classList.remove("hidden");
    // document.querySelector(".dice4").classList.remove("hidden");
    // document.querySelector(".dice5").classList.remove("hidden");
    // document.querySelector(".dice6").classList.remove("hidden");
    // document.querySelector(".button_roll").classList.remove("hidden");

});

document.querySelector(".button_roll").addEventListener("click", function(){
    let min = Math.ceil(1);
    let max = Math.floor(6);

    document.querySelector(".currentRound").textContent=`Round ${1}`

    document.querySelector(".dice1").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice2").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice3").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice4").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice5").textContent=Math.floor(Math.random() * (max - min) + min);
    document.querySelector(".dice6").textContent=Math.floor(Math.random() * (max - min) + min);

    let d1 = document.querySelector(".dice1").textContent;
    let d2 = document.querySelector(".dice2").textContent;
    let d3 = document.querySelector(".dice3").textContent;
    let d4 = document.querySelector(".dice4").textContent;
    let d5 = document.querySelector(".dice5").textContent;
    let d6 =document.querySelector(".dice6").textContent;


}); 