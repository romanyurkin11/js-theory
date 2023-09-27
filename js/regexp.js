"use strict";

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Enter your name: ');

// Pattern:
// const reg = /n/ig;
// const digitReg = /\d/ig;

// console.log(reg.test(ans)); // This method tests does string (ans) contain regexp conditions. (Boolean)


// CLASSES IN REGEXP
// \d - search digits
// \w - search words, letters
// \s - search spaces (Пробелы)

// \D - not a Digits
// \W - not a Words, Letters
// \S - not a Spaces (Пробелы)



// Flags:
// i - If your text hasn't got case dependence 
// g - if you want find different entry points
// m - if you have several rows of sentence

// console.log(ans.search(reg));
// console.log("REGEXP: ", ans.match(reg));



// const pass = prompt('Password: ');
// console.log(pass.replace(/./g, '*')) // All symbols will be converted to star (*)

// If your password contain simple dot you need to use "Экранирование точки"
// Example:
// console.log(pass.replace(/\./g, '*')) // All symbols will be converted to star (*)


// console.log('12-34-56'.replace(/-/g, ':'));




//////////////////////////////////////////////////////////////////////////////////////////


// const word = "My name is R2D2";
// console.log(word.match(/\w\d\w\d/i));