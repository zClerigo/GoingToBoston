"use strict"

//const round = document.querySelector(".rounds")
document.querySelector(".button_rounds").addEventListener("click", function(){
    let list = document.querySelector(".button_rounds").classList;
    if(list.contains("hidden")){
        document.querySelector(".rounds").classList.remove("hidden");
    }else{
        document.querySelector(".rounds").classList.add("hidden");
    } 
});