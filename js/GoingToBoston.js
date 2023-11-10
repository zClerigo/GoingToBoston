"use strict"

document.querySelector(".dice1").classList.add("hidden");
document.querySelector(".dice2").classList.add("hidden");
document.querySelector(".dice3").classList.add("hidden");
document.querySelector(".dice4").classList.add("hidden");
document.querySelector(".dice5").classList.add("hidden");
document.querySelector(".dice6").classList.add("hidden");
document.querySelector(".button_roll").classList.add("hidden");

document.querySelector(".button_rounds").addEventListener("click", function(){
    document.querySelector(".dice1").classList.remove("hidden");
    document.querySelector(".dice2").classList.remove("hidden");
    document.querySelector(".dice3").classList.remove("hidden");
    document.querySelector(".dice4").classList.remove("hidden");
    document.querySelector(".dice5").classList.remove("hidden");
    document.querySelector(".dice6").classList.remove("hidden");
    document.querySelector(".button_roll").classList.remove("hidden");
});