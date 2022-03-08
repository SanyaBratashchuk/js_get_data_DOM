'use strict';

const population = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const totalPopulation = population.reduce((sum, current) => {
  return sum + +(current.innerText.split(',').join(''));
}, 0);
const averagePopulation = totalPopulation / population.length;

totalElement.textContent = totalPopulation.toLocaleString('en-Us');
averageElement.textContent = averagePopulation.toLocaleString('en-Us');
