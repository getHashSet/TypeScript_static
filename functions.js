"use strict";
function addThemTogether(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
;
var thisIsVoid = function (str) {
    console.log(str);
};
printResult2(addThemTogether(5, 12));
var someValue;
var addThemTogetherAlius; // give value to pointer function.
var firstNumber = 8;
var secondNumber = firstNumber;
firstNumber = 10;
addThemTogetherAlius = addThemTogether;
console.log(addThemTogether(firstNumber, secondNumber));
// someValue = 6;
thisIsVoid("hello world");
addAndHandle(10, 20, function (result) {
    console.log(result);
});
