// Operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber, operate, secondNumber) {
    if (operate === "+") return add(firstNumber, secondNumber);
    if (operate === "-") return subtract(firstNumber, secondNumber);
    if (operate === "*") return multiply(firstNumber, secondNumber);
    if (operate === "/") return divide(firstNumber, secondNumber);
}

let firstNumber;
let secondNumber;
let operator;