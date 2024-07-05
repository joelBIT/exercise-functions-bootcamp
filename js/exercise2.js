'use strict';

const date = prompt('Enter a date in the following format YYYY-MM-DD');

/**
 * Returns the year contained in the given date.
 * 
 * @param {*} date is the date on the format YYYY-MM-DD
 */
function getYear(date) {
    return date.substring(0, 4);
}

console.log(`The year in ${date} is ${getYear(date)}`);