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
let finalOperation = '';

// OPERATIONS FUNCTIONS
function addition(a, b) {
    return parseFloat(a + b);
}
function substraction(a, b) {
    return parseFloat(a - b);
}
function multiplication(a, b) {
    return parseFloat(a * b);
}
function division(a, b) {
    if (firstNumber === 0) {
        return calculatorDisplay.textContent = 'You can\'t divide by zero bro. Haven\'t you learned that by now?'
    } else
    return parseFloat(a / b);
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

// NUMBERS INPUT INTO DISPLAY
function displayInput() {
    numbersBtns.forEach((button) =>
        button.addEventListener('click', (e) => {
            numberBtnsValue = parseFloat(e.target.value);
            firstNumber += numberBtnsValue;
            calculatorDisplay.textContent = firstNumber;
            console.log('button click secondNumber: ', secondNumber);
            console.log('button click firstNumber: ', firstNumber);
        })
    );
}
displayInput();

// CLEAR DISPLAY & VALUES
function clearDisplay() {
    clearBtn.addEventListener('click', () => {
        calculatorDisplay.textContent = '';
        firstNumber = '';
        secondNumber= '';
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
            console.log('operator secondNumber: ', secondNumber);
            console.log('operator firstNumber: ', firstNumber);
            if (operatorSelection === '=' && secondNumber === '') {
                return calculatorDisplay.textContent = 'Enter a number first';
            }
        })
        );
}
operatorInput();

// OPERATE EQUALS BUTTON LISTENER
function calculate() {
    equalsBtn.addEventListener('click', () => {
        finalOperation = operate(parseFloat(secondNumber), parseFloat(firstNumber), operatorSelection)
        calculatorDisplay.textContent = finalOperation;
    })
};
calculate();
