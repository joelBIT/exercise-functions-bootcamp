/** Övning 3 */

/**
 * Skriv en funktion som tar tre parametrar. 
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
 * Utför beräkningen och returnera summan och skriv ut. 
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) 
 * och varje operation ska vara sin egen funktion. 
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operations som ska göras (addition, subtraktion etc)
 * 4. Anropa rätt funktion beroende på vad som ska göras
 * 4. I den funktionen ska vi utföra operationen och returnera svaret
 * 5. Skriv ut summan
 */

function add(firstNumber, secondNumber) {
    if (isNumber(firstNumber) && isNumber(secondNumber)) {
        let sum = firstNumber + secondNumber;
        console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);
        return sum;
    }
}

function subtract(firstNumber, secondNumber) {
    if (isNumber(firstNumber) && isNumber(secondNumber)) {
        let difference = firstNumber - secondNumber;
        console.log(`The difference of ${firstNumber} and ${secondNumber} is ${difference}`);
        return difference;
    }
}

function divide(firstNumber, secondNumber) {
    if (isNumber(firstNumber) && isNumber(secondNumber)) {
        let quotient = firstNumber / secondNumber;
        console.log(`The quotient of ${firstNumber} and ${secondNumber} is ${quotient}`);
        return quotient;
    }
}

function multiply(firstNumber, secondNumber) {
    if (isNumber(firstNumber) && isNumber(secondNumber)) {
        let product = firstNumber * secondNumber;
        console.log(`The product of ${firstNumber} and ${secondNumber} is ${product}`);
        return product;
    }
}

function calculate(firstNumber, secondNumber, operation) {
    switch(operation) {
        case '+':
            add(firstNumber, secondNumber);
            break;
        case '-':
            subtract(firstNumber, secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
            break;
        case '*':
            multiply(firstNumber, secondNumber);
            break;
        default:
            console.log(`Could not perform operation since given operation ${operation} is unknown.`);
    }
}

/**
 * Checks if given argument is a number.
 * 
 * @param {*} input the argument to do the check on
 * @returns true if of type number, otherwise false
 */
function isNumber(input) {
    if (Number.isNaN(input)) {
        console.log(`${input} is not of type number`);
        return false;
    }
    return true;
}

let firstNumber = Number(prompt('Enter a number'));
let secondNumber = Number(prompt('Enter another number'));
let operation = prompt('Enter an operation (+ - / *)');

console.log(firstNumber);
console.log(secondNumber);
console.log(operation);
calculate(firstNumber, secondNumber, operation);

