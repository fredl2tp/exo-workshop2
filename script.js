form.onsubmit = function(event) {
event.preventDefault();

let firstNumber = parseInt(document.getElementById("firstnumber").value);
let secondNumber = parseInt(document.getElementById("secondnumber").value);
const operator = document.getElementById("operateurs").value;

let resultat
switch (operator) {
    case "+":
        resultat =(firstNumber + secondNumber);
        break;
    case "-":
        resultat =(firstNumber - secondNumber);
        break;
    case "*":
        resultat =(firstNumber * secondNumber);
        break;
    case "/":
        resultat =(firstNumber / secondNumber);
        break;
    default:
        resultat ="Opérateur invalide";
        break;
}    
const titre = document.querySelector(".titre");
titre.innerHTML="Le resultat est egal à : " + resultat; 

//if (operator === "+") {console.log(firstValue + secondNumber);}
//else {console.log (firstValue - secondNumber);}
//console.log (firstValue);
//console.log (operator);
//console.log (secondNumber);
//console.log (firstValue + secondNumber);
}