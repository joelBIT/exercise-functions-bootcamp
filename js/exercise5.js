'use strict';

const sum = Number(prompt('Enter cost of dinner'));
const numberOfPeople = Number(prompt('Enter number of dinner guests'));
const tip = Number(prompt('Enter the tip in decimal form (10% is 0.10)'));

/**
 * Calculates the cost per person.
 * 
 * @param {*} sum the cost of the dinner
 * @param {*} numberOfPeople the number of people who are going to split the bill
 * @param {*} tip the tip in decimal (10% is 0.10)
 * @returns 
 */
function costPerPerson(sum, numberOfPeople, tip) {
    tip += 1;
    sum *= tip;
    return sum / numberOfPeople;
}

console.log(`The cost per person is ${costPerPerson(sum, numberOfPeople, tip)}`);