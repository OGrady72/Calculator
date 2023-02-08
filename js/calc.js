window.addEventListener('load', activateCalc);

function activateCalc(e) {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>  {
        button.addEventListener('click', btnClicked) 
    
    }); 

    let periodButton = document.getElementById('period');
    
        periodButton.disabled = true;
}

function displayNumber(number) {

    let display = document.querySelector('.display');
    display.innerText = number;
}

function appendFirstNumber(e) {

    console.log(`appendFirstNumber`, typeof(calc.firstNumber));

    if (calc.firstNumber.length < 10) {
    calc.firstNumber += e.target.innerText;
    console.log(`append:`, calc.firstNumber);
    displayNumber(calc.firstNumber);
    }
    
}

function appendSecondNumber(e) {

    if (calc.secondNumber.length < 10) {
    calc.secondNumber += e.target.innerText;
    console.log(`append:`, calc.secondNumber);
    displayNumber(calc.secondNumber);
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
    display.innerText = 0;
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
   deleteCalcNumbers();
}

function add(obj) {
    
    let firstNumber = Number(obj.firstNumber);
    let secondNumber = Number(obj.secondNumber);
    calc.result = firstNumber + secondNumber;
    displayNumber(calc.result);
    deleteCalcNumbers();
 }

 function subtract(obj) {
    
    let firstNumber = Number(obj.firstNumber);
    let secondNumber = Number(obj.secondNumber);
    calc.result = firstNumber - secondNumber;
    displayNumber(calc.result);
    deleteCalcNumbers();
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
    deleteCalcNumbers();

    }
 }

 function deleteCalcNumbers() {
    delete calc.firstNumber;
    delete calc.secondNumber;
    delete calc.operator;
 }

 function plusMinus(num) {
 
    return (num < 0) ?  Math.abs(num) : -num;
 }

 function operate() {

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

let calc = {};

function btnClicked(e) {
   
    
    console.log(e);

 
    e.target.style.opacity = .8;

    setTimeout(function() {
        e.target.style.opacity = 1;
    }, 150);
    

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

   if(calc.hasOwnProperty('secondNumber') && calc.hasOwnProperty('operator') && (e.target.className === 'operand')) {
    appendSecondNumber(e);
   }

   if(!calc.hasOwnProperty('secondNumber') && calc.hasOwnProperty('operator') && (e.target.className === 'operand')) {

    createSecondNumber(e);
   }

   

   if (e.target.className === 'equals')  {

    if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('secondNumber') && 
        calc.hasOwnProperty('operator')) {

            operate();
            
       }
   }
       if  (e.target.className =='operator') {

        if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('secondNumber') && 
            calc.hasOwnProperty('operator')) {
    
                operate();
                assignOperator(e);
                
           }
        }

        if ((e.target.className === 'operand') && calc.hasOwnProperty('result')) {
            calc.firstNumber = e.target.innerText;
            delete calc.result;
            
          }

          if ((e.target.className === 'operator' && calc.hasOwnProperty('result'))) {
            calc.firstNumber = calc.result;
            delete calc.result;
            
          }
          
          if (e.target.className === 'percent') {

            if(calc.hasOwnProperty('firstNumber') && !calc.hasOwnProperty('operator')) {

                percentCalc = Number(calc.firstNumber) / 100;
                calc.firstNumber = String(percentCalc);
                displayNumber(calc.firstNumber);
            } else if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('secondNumber')) {

                percentCalc = Number(calc.secondNumber) / 100;
                calc.secondNumber = String(percentCalc);
                displayNumber(calc.secondNumber);

            } else if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('operator') && 
                       (!calc.hasOwnProperty('secondNumber'))) {
                         
                        percentCalc = Number(calc.firstNumber) / 100;
                        calc.firstNumber = String(percentCalc);
                        displayNumber(calc.firstNumber);

            }  else if (calc.hasOwnProperty('result')) {
                        
                        percentCalc = Number(calc.result) / 100;
                        calc.result = String(percentCalc);
                        displayNumber(calc.result);

                        } 
          }

          if (e.target.className ==='plusMinus') {
            
            if(calc.hasOwnProperty('firstNumber') && !calc.hasOwnProperty('operator')) {

                calc.firstNumber = plusMinus(calc.firstNumber);
                calc.firstNumber = String(calc.firstNumber);
                displayNumber(calc.firstNumber);
            
            } else if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('secondNumber')) {

                calc.secondNumber = plusMinus(calc.secondNumber);
                calc.secondNumber = String(calc.secondNumber);
                displayNumber(calc.secondNumber);

            } else if (calc.hasOwnProperty('firstNumber') && calc.hasOwnProperty('operator') && 
                      (!calc.hasOwnProperty('secondNumber'))) {
              
                calc.firstNumber = plusMinus(calc.firstNumber);
                calc.firstNumber = String(calc.firstNumber);
                displayNumber(calc.firstNumber);
            
            }  else if (calc.hasOwnProperty('result')) {
                        
                calc.result = plusMinus(calc.result);
                calc.result = String(calc.result);
                displayNumber(calc.result);

                } 
         
 
           }

           

           

console.table(calc); 
}
