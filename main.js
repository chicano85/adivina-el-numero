"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const track = document.querySelector(".js-track");
const tries = document.querySelector(".js-try");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);

console.log(`Mi número aleatorio es ${random}`);

function proofclick() {
  debugger;
  const numberValue = number.value;
  if (numberValue > random) {
    console.log("Demasiado alto");
  } else if (numberValue < random) {
    console.log("Demasiado bajo");
  } else if (numberValue === random) {
    console.log("Has ganado campeona");
  } else {
    console.log("El número debe estar entre 1 y 100.");
  }
}

button.addEventListener("click", proofclick);
