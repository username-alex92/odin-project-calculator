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
    if (toggleEquals) {
        // When a result is displayed, pressing a new digit 
        // should clear the result and start a new calculation 
        // instead of appending the digit to the existing result.
        input.value = "";
        if (input.value.includes(".")) {
            decimalPoint.disabled = true;
        } else {
            decimalPoint.disabled = false;
        }
        input.value += event.target.textContent;
        toggleEquals = false;
    } else {
        if (input.value.includes(".")) {
            decimalPoint.disabled = true;
        } else {
            decimalPoint.disabled = false;
        }
        input.value += event.target.textContent;
    }
}

function calculate() {
    return operate(Number(firstNumber), operator, Number(secondNumber));
}

function equal() {
    secondNumber = input.value;
    if (firstNumber === undefined || firstNumber === null) {
        input.value = "";
    } else if (operator === "/" && secondNumber === "0") {
        alert("Division into zero is impossible");
        input.value = "";
    }  else {
        toggleEquals = true;
        secondNumber = input.value;
        result = calculate();
        if (Number.isInteger) {
            input.value = result;
        } else {
            input.value = result.toFixed(3);
        }
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
const decimalPoint = document.querySelector("#decimal-point");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let firstNumber;
let secondNumber;
let operator = "";
let operatorCount = 0;
let result;
let toggleEquals = false;

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

decimalPoint.addEventListener("click", readInput);

equals.addEventListener("click", equal);

clear.addEventListener("click", reset);