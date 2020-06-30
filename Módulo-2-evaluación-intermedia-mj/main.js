'use strict';

//CONSTANTES GENERALES:

const btn = document.querySelector('.js-submit-number');
const clue = clue.innerHtml;

//GENERAR RANDOM NUMBER:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));

//QUÉ HACER CON EL USER INPUT:

function handleNumberInput() {
  const userNumber = document.querySelector('.js-input-number').value;
  console.log(userNumber);

  if (userNumber === getRandomNumber) {
  }
}

btn.addEventListener('click', handleNumberInput);

//Cuando se envía input:
//acceder a input.value y mostrar en consola
//if, else,
//mostrar pista o msg éxito
//Update counter
