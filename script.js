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
let operatorBtnsValue;
let firstNumber = '';
let secondNumber = '';
let finalNumber = '';
let operatorSelection;
let operator;
let finalOperation;

// OPERATIONS FUNCTIONS
function addition(a, b) {
	return parseFloat(a) + parseFloat(b);
}
function substraction(a, b) {
	return parseFloat(a) - parseFloat(b);
}
function multiplication(a, b) {
	return parseFloat(a) * parseFloat(b);
}
function division(a, b) {
	if (b == 0) {
		return "Can't devide by zero.";
	} else return parseFloat(a) / parseFloat(b);
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
	numbersBtns.forEach(button =>
		button.addEventListener('click', e => {
			numberBtnsValue = e.target.value;
			firstNumber += numberBtnsValue;
			calculatorDisplay.innerHTML = firstNumber;
			console.log('~ firstNumber', firstNumber);
			return parseFloat(firstNumber);
		})
	);
}
displayInput();
console.log('~ firstNumber:', firstNumber);

// CLEAR DISPLAY & VALUES
function clearDisplay() {
	calculatorDisplay.innerHTML = '';
	firstNumber = '';
	secondNumber = '';
}
clearBtn.addEventListener('click', () => {
	clearDisplay();
});

// OPERATORS CLICK LISTENERS
function operatorInputClickListener() {
	operatorBtns.forEach(button => {
		button.addEventListener('click', e => {
			operatorBtnsValue = e.target.value;
			calculatorDisplay.innerHTML = operatorBtnsValue;
			if (firstNumber !== '') {
				secondNumber = firstNumber;
				firstNumber = '';
			}
			if (secondNumber !== '') {
				operate(secondNumber, firstNumber, operatorBtnsValue);
				calculatorDisplay.innerHTML = finalNumber;
				console.log('~ finalNumber', finalNumber);
			}
			console.log('~ operator:', operatorBtnsValue);
			console.log('~ firstNumber', firstNumber);
			console.log('~ secondNumber', secondNumber);
			return operator;
		});
	});
}
operatorInputClickListener();
