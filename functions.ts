function addThemTogether(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
};

const thisIsVoid = (str: string) => {
  console.log(str);
};

printResult2(addThemTogether(5, 12));

let someValue: undefined;

let addThemTogetherAlius: (_a: number, _b: number) => number; // give value to pointer function.

let firstNumber: number = 8;
const secondNumber: number = firstNumber;
firstNumber = 10;
addThemTogetherAlius = addThemTogether;

console.log(addThemTogether(firstNumber, secondNumber));

// someValue = 6;

thisIsVoid("hello world");

addAndHandle(10, 20, (result) => {
    console.log(result);
});