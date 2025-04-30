let textValue = "";

let inputPrincipal = document.querySelector("#input1");


function addNumber(number){
    textValue += number;
    updateText();
}

function addOperador(operator){
    textValue +=operator;
    updateText();
    
}
function addDecimal(){
    textValue += ".";
    updateText();
}

function clearText(){
    textValue = "";
    updateText();
    
}
function updateText(){
    inputPrincipal.value = textValue;
}

function calculate(){
    textValue = eval(textValue);
    updateText();
}

function Delete() {
    textValue = inputPrincipal.value.slice(0,-1);
    updateText();
}