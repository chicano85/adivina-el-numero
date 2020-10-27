"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const track = document.querySelector(".js-track");
const tries = document.querySelector(".js-try");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);

let attempt = 0;

function inner(text) {
  return (track.innerHTML = text);
}

function proofclick() {
  const numberValue = parseInt(number.value);
  // Para hacer que number.Value esté en 0 y 100. Eso debe ser lo primero.

  if (numberValue > random && numberValue <= 100) {
    inner("Demasiado alto");
  } else if (numberValue < random && numberValue >= 1) {
    inner("Demasiado bajo");
  } else if (numberValue === random) {
    inner("Has ganado campeona");
    button.removeEventListener("click", proofclick);
  } else {
    inner("El número debe estar entre 1 y 100.");
  }
}

button.addEventListener("click", proofclick);

function counter() {
  attempt++;
  tries.innerHTML = "Número de intentos: " + attempt;
}
function handler() {
  proofclick();
  counter();
}
button.addEventListener("click", handler);
