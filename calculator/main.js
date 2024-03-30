let display=document.getElementById('display');

document.addEventListener('keydown', function(event) {
    // Get the key that was pressed
    const key = event.key;
  
    // Check if the key is a number or an operator
    if (/[0-9\+\-\*\/\=\.]/.test(key)) {
      // Append the key to the display
      appendToDisplay(key);
    } else if (key === 'Enter') {
      // If Enter key is pressed, calculate the result
      calculate();
    } else if (key === 'Escape') {
      // If Escape key is pressed, clear the display
      clearDisplay();
    }
  });

  
function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}

