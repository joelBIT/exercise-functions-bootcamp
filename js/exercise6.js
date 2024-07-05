'use strict';

const startWord = prompt('Enter the start word');
const endWord = prompt('Enter the end word');
let currentWord = startWord;

while (currentWord !== endWord) {
    let newWord = prompt(`Your current word is ${currentWord}. Enter a new word.`);
    if (isExactlyOneLetterThatChanged(newWord)) {
        currentWord = newWord;
    }
}

alert(`The current word "${currentWord}" matches the end word "${endWord}"`);

function isExactlyOneLetterThatChanged(newWord) {
    let differences = 0;
    for (let i = 0; i < currentWord.length; i++) {
        if (newWord[i] !== currentWord[i]) {
            differences++;
        }
    }
    return differences > 1 ? false : true;
}