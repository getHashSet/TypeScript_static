"use strict";
console.log("by Matthew Carpenter");
function add(n1, n2, showResult, phrase) {
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        n1 + n2;
    }
    ;
}
const number2 = 2.8;
const number1 = 5;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
