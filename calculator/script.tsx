const container = document.querySelector("#container");
const display = document.querySelector("#display");



const add = function (a, b) {
    return a + b
}

const subtract = function(a, b){
    return a - b
}

const multiply = function(a , b) {
    return a * b
}

const divide = function (a, b) {
    return a / b
}


let firstNum = ""
let secondNum = ""
let operator = ""

const operate = function(firstNum, secondNum, operator) {
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
