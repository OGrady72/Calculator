window.addEventListener('load', activateCalc);

function activateCalc(e) {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>  {
        button.addEventListener('click', btnClicked) 
    
    }); 
}

function displayNumber(number) {

    let display = document.querySelector('.display');
    display.innerText = number;
}

function appendFirstNumber(e) {

    if (calc.firstNumber.length < 10) {
    calc.firstNumber += e.target.innerText;
    console.log(`append:`, calc.firstNumber);
    displayNumber(calc.firstNumber);
    }

    
}

function createFirstNumber(e) {

    calc.firstNumber = e.target.innerText;
    console.log(`create:`, calc.firstNumber);
    displayNumber(calc.firstNumber);
}

function clearCalc() {
    delete calc.firstNumber;
    delete calc.operator;
    delete calc.secondNumber;
    delete calc.result;
  
    let display = document.querySelector('.display');
    display.innerText = '0';
}

function assignOperator(e) {
    calc.operator = e.target.innerText;
    console.log(`assignOperator`, calc.operator)
}

function createSecondNumber(e) {
    calc.secondNumber = e.target.innerText;
    displayNumber(calc.secondNumber);
}

function multiply(obj) {
    
   let firstNumber = Number(obj.firstNumber);
   let secondNumber = Number(obj.secondNumber);
   calc.result = firstNumber * secondNumber;
   displayNumber(calc.result);
}

function add(obj) {
    
    let firstNumber = Number(obj.firstNumber);
    let secondNumber = Number(obj.secondNumber);
    calc.result = firstNumber + secondNumber;
    displayNumber(calc.result);
 }

 function subtract(obj) {
    
    let firstNumber = Number(obj.firstNumber);
    let secondNumber = Number(obj.secondNumber);
    calc.result = firstNumber - secondNumber;
    displayNumber(calc.result);
 }

 function divide(obj) {
    
    let firstNumber = Number(obj.firstNumber);
    let secondNumber = Number(obj.secondNumber);
    if (secondNumber === 0) {
        calc.result = "Nope (Hit A/C)"
        displayNumber(calc.result);
    } else {
    calc.result = firstNumber / secondNumber;
    displayNumber(calc.result);
    }
 }

let calc = {};

function btnClicked(e) {
    
    console.log(e);
    
   // e.target.style.opacity = .8;

   if (calc.hasOwnProperty('firstNumber') && (!calc.hasOwnProperty('operator'))
   && (e.target.className == 'operand')) {
    
    appendFirstNumber(e);
    }

   if (!calc.hasOwnProperty('firstNumber') && (e.target.className == 'operand')) {
    
    createFirstNumber(e);
   }

   if(e.target.className === 'clear') {
    
    clearCalc();
   }

   if(!calc.hasOwnProperty('operator') && (e.target.className === 'operator')) {
    
     assignOperator(e);
   }

   if(!calc.hasOwnProperty('secondNumber') && calc.hasOwnProperty('operator') && (e.target.className === 'operand')) {

    createSecondNumber(e);
   }

   if (e.target.className === 'equals') {

    if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('secondNumber') && 
        calc.hasOwnProperty('operator')) {

      switch(calc.operator) {
        case '*': 
            multiply(calc);
            break;
        case '+':
            add(calc);
            break;
        case '-':
            subtract(calc);
            break;
        case '/':
            divide(calc);
            break;
      }
        
   }
}
}