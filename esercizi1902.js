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
};

console.log("Esercizio 2 arrow \n");
// esercizio 2 arrow
// const isEven = (number) => {
//     number = Math.abs(number);
//     if (number === 0) {
//         return true;
//     } else if (number === 1) {
//         return false;
//     } else {
//         return isEven(number - 2);
//     }
// };

console.log("Esercizio 3 conta B\n");
// esercizio 3 conta B
function countBs(str) {
    let countedB = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B' || str[i] === 'b') {
            countedB++;
        }
    }
    return countedB;
}
let userInput = prompt("Inserisci una parola per contare le B");
console.log(countBs(userInput));
// // funzione arrow
// const countBs = (str) => {
//     let countedB = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'B' || str[i] === 'b') {
//             countedB++;
//         }
//     }
//     return countedB;
// }


console.log("Esercizio 3 conta lettere\n");
// esercizio 3 conta lettere
function countLetter(strng, letter) {
    let count = 0;
    let lowerLetter = letter.toLowerCase();
    for (let i = 0; i < strng.length; i++) {
        if (strng[i].toLowerCase() === lowerLetter) {
            count++;
        }
    }
    return count;
}
let wordInput = prompt("Inserisci una parola di cui contare le lettere");
let letterInput = prompt("Inserisci quale lettera vuoi contare");
console.log(countLetter(wordInput, letterInput));
// // funzione arrow
// const countLetter = (strng, letter) => {
//     let count = 0;
//     let lowerLetter = letter.toLowerCase();
//     for (let i = 0; i < strng.length; i++) {
//         if (strng[i].toLowerCase() === lowerLetter) {
//             count++;
//         }
//     }
//     return count;
// };