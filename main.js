const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')

let currentInput = ''
let operator = ''
let firstOperand = ''


function inputValue (val){
    if (isOperator(val)) {
        if (operator) {
            return 
        }
        firstOperand = currentInput
        operator = val
        display.innerHTML = firstOperand
        currentInput = ''
    }
    else {
    currentInput = currentInput + val

    display.innerHTML = currentInput
    }
}


function calculate() {
    display.innerText = eval(firstOperand + operator + currentInput)    
}


for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (this.textContent === '=') {
            calculate();
        }
        else if (this.textContent === 'AC') {
            clearDisplay()
        }
        else {
            inputValue(this.textContent)
        }
    })
}


function isOperator(val) {
    return ['+', '-', '*', '/', '%'].includes(val)

}


function clearDisplay() {
    currentInput = ''
    display.innerHTML = '0'
}


