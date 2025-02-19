console.log("Esercizio 1 funzione \n");
// esercizio 1 funzione
let numIns1, numIns2;
function minimo(num1, num2) {
    return Math.min(num1, num2);
}
while (isNaN(numIns1) || isNaN(numIns2)) {
    numIns1 = parseInt(prompt("Inserisci il primo numero!"));
    numIns2 = parseInt(prompt("Inserisci il secondo numero!"));
    if (isNaN(numIns1) || isNaN(numIns2)) {
        alert("Per favore, inserisci due numeri validi!");
    }
}
console.log(minimo(numIns1, numIns2));

console.log("Esercizio 1 arrow \n");
// esercizio 1 arrow
let numIns3, numIns4;
const minimo2 = (num3, num4) => Math.min(num3, num4);
while (isNaN(numIns3) || isNaN(numIns4)) {
    numIns3 = parseInt(prompt("Inserisci il primo numero!"));
    numIns4 = parseInt(prompt("Inserisci il secondo numero!"));
    if (isNaN(numIns3) || isNaN(numIns4)) {
        alert("Per favore, inserisci due numeri validi!");
    }
}
console.log(minimo2(numIns3, numIns4));

console.log("Esercizio 2 funzione \n");
// esercizio 2 funzione
function isEven(number) {
    number = Math.abs(number);
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log("Esercizio 2 arrow \n");
// esercizio 2 arrow
const return=isEven(number)  =>  {
    number = Math.abs(number);
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

