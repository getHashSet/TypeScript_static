const button = document.querySelector('button');
const number1 = document.getElementById('input1')! as HTMLInputElement;
const number2 = document.getElementById('input2')! as HTMLInputElement;

function addTogether(num: number, num2: number) {
    return num + num2;
};

button.addEventListener("click", function() {
    console.log(addTogether(+number1.value, +number2.value));
});