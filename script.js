const header = document.querySelector('.header');
const mainContainer = document.querySelector('.container');
const calculatorDisplay = document.querySelector('.display');
const calculatorControls = document.querySelector('.controls');
const operatonContainer = document.querySelector('.operators');
const numbersContainer = document.querySelector('.numbers-container');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');
const numbersBtn = document.getElementById('number-btn');

// OPERATIONS FUNCTIONS
function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
