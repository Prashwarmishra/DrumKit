"use strict";
function playTrack(key){
    const audio=document.querySelector(`audio[data-value="${key}"]`);
    const currKey=document.querySelector(`.key[data-value="${key}"]`);
    if(audio == null){
        return;
    }
    audio.currentTime=0;
    audio.play();
    currKey.classList.add("playing");
}

function stopTransition(){
    this.classList.remove("playing");
}

window.addEventListener("keydown", function(event){
    playTrack(event.key);
    const keys=document.querySelectorAll(".key");
    for(let key of keys){
        key.addEventListener("transitionend", stopTransition);
    }
});