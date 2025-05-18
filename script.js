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


let input = document.querySelector("input");
let digits = document.querySelector(".digits");
let operators = document.querySelector(".operators");
let equals = document.querySelector("#equals");

let firstNumber;
let secondNumber;
let operator;
let result;


digits.addEventListener("click", (event) => {
    if (result !== undefined) {
        input.value = "";
        result = undefined;
    }
    input.value += event.target.textContent;
});

operators.addEventListener("click", (event) => {
    firstNumber = input.value;
    input.value = "";
    operator = event.target.textContent;
});

equals.addEventListener("click", () => {
    secondNumber = input.value;
    result = operate(parseInt(firstNumber), operator, parseInt(secondNumber));
    input.value = result;
});
