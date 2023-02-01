window.addEventListener('load', activateCalc);

function activateCalc(e) {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>  {
        button.addEventListener('click', btnClicked) 
    
    }); 
}

function displayFirstNumber() {

    let display = document.querySelector('.display');
    display.innerText = calc.firstNumber;
}

function appendFirstNumber(e) {

    if (calc.firstNumber.length < 10) {
    calc.firstNumber += e.target.innerText;
    console.log(`append:`, calc.firstNumber);
    displayFirstNumber();
    }

    
}

function createFirstNumber(e) {

    calc.firstNumber = e.target.innerText;
    console.log(`create:`, calc.firstNumber);
    displayFirstNumber();
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

   

}