"use strict"

document.querySelector(".button_rounds").addEventListener("click", function(){
    //let input_element_style = document.querySelector(".button_rounds").classList;
    document.querySelector(".dice1").classList.add("hidden");
    document.querySelector(".dice2").classList.add("hidden");
    document.querySelector(".dice3").classList.add("hidden");
    document.querySelector(".dice4").classList.add("hidden");
    document.querySelector(".dice5").classList.add("hidden");
    document.querySelector(".dice6").classList.add("hidden");
    document.querySelector(".button_roll").classList.add("hidden");
});