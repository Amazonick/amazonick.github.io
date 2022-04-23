const allButtons = document.querySelectorAll('button');

const backBtn = document.querySelector('.backspace');
const clearBtn = document.querySelector('.clear-btn');

const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');

const periodBtn = document.querySelector('.period-btn');
const equalsBtn = document.querySelector('.equals-btn');

const displayOutput = document.querySelector('.display');

let currentNumber = '';
let previousNumber = '';
let operation = '';
let number = '';
let buttonIsClicked = false;

function calculator() {
	backspace();
	numberInput(currentNumber);
	operationInput(operation);
	updateDisplay();
	clear();
}
calculator();

function clear() {
	currentNumber = '';
	previousNumber = '';
	operation = '';
}

function backspace() {
	return (currentNumber = currentNumber.slice(0, -1));
}

function numberInput(number) {
	previousNumber = number;
}

function operationInput(operation) {}

function compute() {}

function updateDisplay() {
	// if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
	// 	displayOutput.innerHTML = operation;
	// } else if (currentNumber !== '') {
	displayOutput.innerHTML = currentNumber;
	// }
}

function clickHandler() {
	if (previousNumber === '') {
		previousNumber = currentNumber;
		currentNumber = '';
	} else if (previousNumber !== '') {
		let result = operate(previousNumber, currentNumber, operation);
		displayOutput.innerHTML = result.toString();
		previousNumber = result.toString();
		currentNumber = '';
		console.log('~ result', result);
		return result;
	} else if (result !== '') {
		operate(result, currentNumber, operation);
		currentNumber = '';
		return previousNumber;
	}
	console.log('~ currentNumber', currentNumber);
	console.log('~ previousNumber', previousNumber);
}

numberBtns.forEach(button => {
	button.addEventListener('click', e => {
		number = e.target.value;
		currentNumber += number;
		updateDisplay();
		console.log('~ currentNumber2', currentNumber);
		console.log('~ previousNumber', previousNumber);
		return currentNumber;
	});
});

clearBtn.addEventListener('click', () => {
	displayOutput.innerHTML = '';
	clear();
});

backBtn.addEventListener('click', () => {
	backspace();
	updateDisplay();
});

operatorBtns.forEach(button => {
	button.addEventListener('click', e => {
		operation = e.target.value;
		let operatorSign = e.target.textContent;
		displayOutput.innerHTML = operatorSign;
		clickHandler();
		console.log('previousNumber when operator is Clicked:', previousNumber);
		console.log('currentNumber when operator is Clicked:', currentNumber);
		console.log('operation when operator is Clicked:', operation);
	});
});

equalsBtn.addEventListener('click', () => {
	let result = operate(previousNumber, currentNumber, operation);
	displayOutput.innerHTML = result;
	return result;
});

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

function operate(previousNumber, currentNumber, operator) {
	if (operator === '+') {
		return addition(previousNumber, currentNumber);
	} else if (operator === '-') {
		return substraction(previousNumber, currentNumber);
	} else if (operator === '*') {
		return multiplication(previousNumber, currentNumber);
	} else if (operator === '/') {
		return division(previousNumber, currentNumber);
	}
}
