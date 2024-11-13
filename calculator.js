// script.js
const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (!isNaN(value)) { // if it's a number
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === 'C') { // Clear button
            currentInput = '';
            previousInput = '';
            operator = null;
            display.textContent = '0';
        } else if (value === '=') { // Equals button
            if (operator) {
                const result = calculate(previousInput, currentInput, operator);
                display.textContent = result;
                currentInput = result;
                operator = null;
            }
        } else { // Operator (+, -, *, /)
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    });
});

function calculate(a, b, operator) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error';
        default: return '';
    }
}