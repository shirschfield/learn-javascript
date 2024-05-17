const display = document.querySelector("#display");
const buttonsContainer = document.querySelector("#buttons-container");

const buttonLabels = [
    '7', '8', '9', '/', 'C',
    '4', '5', '6', '*', '←',
    '1', '2', '3', '-', '',
    '0', '.', '', '+', '='
];

function createButtons(labels) {
    labels.forEach(label => {
        const button = document.createElement('div');
        button.classList.add('button');
        button.textContent = label;
        button.addEventListener('click', () => handleButtonClick(label));
        buttonsContainer.appendChild(button);
    });
}

createButtons(buttonLabels);






const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const multiply = function (a, b) {
    return a * b
}

const divide = function (a, b) {
    return a / b
}


let firstNum = ""
let secondNum = ""
let operator = ""

const operate = function (firstNum, secondNum, operator) {
    if (operator === "+") {
        return add(firstNum, secondNum)
    } else if (operator === "-") {
        return subtract(firstNum, secondNum)
    } else if (operator === "*") {
        return multiply(firstNum, secondNum)
    } else if (operator === "/") {
        return divide(firstNum, secondNum)

    }
}
