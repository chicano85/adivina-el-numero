"use strict"

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const track = document.querySelector(".js-track");
const tries = document.querySelector(".js-try");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

  const random = getRandomNumber(100);

  console.log(`Mi número aleatorio es ${random}`);

  function proofclick () {

    if (number > random) {
      track.value = "Demasiado alto"
    } else if (number < random) {
      track.value = "Demasiado bajo"
    } else if (number === random) {
      track.value = "Has ganado campeona"
    } 
  
  }
  
  button.addEventListener("click", proofclick); 