'use strict';

//CONSTANTES GENERALES:

const btn = document.querySelector('.js-submit-number');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');

//GENERAR RANDOM NUMBER:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

console.log(randomNumber);

//QUÉ HACER CON EL USER INPUT:

function handleNumberInput(event) {
  event.preventDefault();
  const userNumber = parseInt(document.querySelector('.js-input-number').value);
  console.log(userNumber);
  console.log(randomNumber);

  if (userNumber === randomNumber) {
    clue.innerHTML = '¡¡Enhorabuena, has acertado!!';
  } else if (userNumber >= 101) {
    clue.innerHTML = 'Recuerda que el número ha de estar entre 0 y 100 ;) ';
  } else if (userNumber <= randomNumber) {
    clue.innerHTML = 'Este número es demasiado bajo, ¡prueba otra vez! :) ';
  } else if (userNumber >= randomNumber) {
    clue.innerHTML = 'Este número es demasiado alto, ¡prueba otra vez! :) ';
  }
}

btn.addEventListener('click', handleNumberInput);

//UPDATE COUNTER!!!!
