const header = document.querySelector('.header');
const mainContainer = document.querySelector('.container');
const calculatorDisplay = document.querySelector('.display');
const calculatorControls = document.querySelector('.controls');
const operatorBtns = document.querySelectorAll('.operator-btn');
const numbersContainer = document.querySelector('.numbers-container');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');
const numbersBtns = document.querySelectorAll('.number-btn');
const clearBtn = document.getElementById('clear-btn');
let numberBtnsValue;
let firstNumber = '';
let secondNumber = '';
let finalNumber = '';
let operatorSelection = '';
let operator = '';

// DISPLAY NUMBERS
function displayInput() {
    numbersBtns.forEach((button) =>
        button.addEventListener('click', (e) => {
            numberBtnsValue = e.target.value;
            firstNumber += numberBtnsValue;
            calculatorDisplay.textContent = parseFloat(firstNumber);
            console.log('~ firstNumber', firstNumber);
            console.log('~ secondNumber', secondNumber);
        })
    );
}
displayInput();

// CLEAR DISPLAY
function clearDisplay() {
    clearBtn.addEventListener('click', () => {
        calculatorDisplay.textContent = '';
        firstNumber = '';
    });
}
clearDisplay();

// OPERATORS CLICK LISTENERS
function operatorInput() {
    operatorBtns.forEach((button) =>
        button.addEventListener('click', (e) => {
            operatorSelection = e.target.textContent;
            calculatorDisplay.textContent = operatorSelection.toString();
            secondNumber = firstNumber;
            firstNumber = '';
            if (operatorSelection === '=' && secondNumber === '') {
                calculatorDisplay.textContent = 'Enter a number first';
            }
        })
    );
}
operatorInput();

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

function operate(num1, num2, operator) {
    if (operator === '+') {
        return addition(num1, num2);
    } else if (operator === '-') {
        return substraction(num1, num2);
    } else if (operator === '*') {
        return multiplication(num1, num2);
    } else if (operator === '/') {
        return division(num1, num2);
    }
}
