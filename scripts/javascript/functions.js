"use strict";
function addThemTogether(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
;
const thisIsVoid = (str) => {
    console.log(str);
};
printResult2(addThemTogether(5, 12));
let someValue;
let addThemTogetherAlius; // give value to pointer function.
let firstNumber = 8;
const secondNumber = firstNumber;
firstNumber = 10;
addThemTogetherAlius = addThemTogether;
console.log(addThemTogether(firstNumber, secondNumber));
// someValue = 6;
thisIsVoid("hello world");
addAndHandle(10, 20, (result) => {
    console.log(result);
});
