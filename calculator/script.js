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


let firstNum = "";
let secondNum = "";
let operator = null;

// TODO: fix display 

function handleButtonClick(label) {
    if (label === 'C') {
        display.textContent = '';
        operator = ""
        firstNum = ""
        secondNum = ""
    } else if (label === '←') {
        display.textContent = display.textContent.slice(0, -1) || '0'; // take the begining (index 0) up to but not including the last character of the string (index -1)
    } else if (label === '+' || label === '-' || label === '/' || label === '*') {
        if (!firstNum) {
            firstNum = display.textContent
            operator = label
        } else if (firstNum && operator && secondNum === "") {
            secondNum = display.textContent
            display.textContent = operate(firstNum, secondNum, operator)
            display.textContent = firstNum
            secondNum = ""
            operator = label
            display.textContent = ""
            
        } else if (firstNum && operator && secondNum) {
            display.textContent = operate(firstNum, secondNum, operator)
            firstNum = display.textContent
            secondNum = ""
            operator = label
        }
    } else if (label === "=") {
        if (firstNum && operator) {
            secondNum = display.textContent;
            display.textContent = operate(firstNum, secondNum, operator);
            firstNum = "";
            secondNum = "";
            operator = null;
        }
    } else {
        if (display.textContent === '0') {
            display.textContent = label;
        } else {
            if (firstNum && operator && !secondNum) {
                display.textContent = firstNum
                secondNum += label
                display.textContent = secondNum
                console.log(firstNum)
                console.log(secondNum)
                console.log(operator)
            } else if ((firstNum && operator && secondNum)) {
                secondNum += label
                display.textContent = secondNum
                
            
            } else {
            display.textContent += label;
        } }
    }
}

currentDisplayValue = display.textContent;



const add = function (a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const multiply = function (a, b) {
    return a * b
}

const divide = function (a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (b !== 0) {
    return a / b
    } else if (b === 0) {
        return "nooooo" // fix this
    }
}




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
