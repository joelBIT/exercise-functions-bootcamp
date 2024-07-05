'use strict';

const text = prompt('Enter a text');

/**
 * Return the number of characters in the argument string.
 * 
 * @param {*} text the text
 * @returns the length of the text
 */
function getTextLength(text) {
    return text.length;
}

console.log(`The length of "${text}" is ${getTextLength(text)}`);