var button = document.querySelector('button');
var number1 = document.getElementById('input1');
var number2 = document.getElementById('input2');
function addTogether(num, num2) {
    return num + num2;
}
;
button.addEventListener("click", function () {
    console.log(addTogether(+number1.value, +number2.value));
});
