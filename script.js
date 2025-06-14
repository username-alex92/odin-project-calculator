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

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") return add(firstNumber, secondNumber);
    if (operator === "-") return subtract(firstNumber, secondNumber);
    if (operator === "*") return multiply(firstNumber, secondNumber);
    if (operator === "/") return divide(firstNumber, secondNumber);
}


function readInput(event) {
    input.value += event.target.textContent;
}

function calculate() {
    return operate(parseInt(firstNumber), operator, parseInt(secondNumber));
}

function equal() {
    if (firstNumber === undefined || firstNumber === null) {
        input.value = "";
    } else {
        secondNumber = input.value;
        result = calculate();
        input.value = result;
        operatorCount = 0;
    }
}

function reset() {
    firstNumber = null;
    secondNumber = null;
    operator = "";
    operatorCount = 0;
    input.value = "";
}


const input = document.querySelector("input");
const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let firstNumber;
let secondNumber;
let operator = "";
let operatorCount = 0;
let result;

digits.addEventListener("click", readInput);

operators.addEventListener("click", (event) => {
    if (operatorCount > 0) {
        equal();
        firstNumber = result;
        operatorCount = 0;
    }
    firstNumber = input.value;
    operator = event.target.textContent;
    input.value = "";
    operatorCount++;
});

equals.addEventListener("click", equal);

clear.addEventListener("click", reset);