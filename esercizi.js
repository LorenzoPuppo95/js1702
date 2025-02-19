console.log("Esercizio 1 \n");
// esercizio 1
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

console.log("\nEsercizio 2 \n");

// esercizio 2
for (let n = 1; n <= 100; n++) {
    switch (true) {
        case (n % 5 === 0 && n % 3 === 0):
            console.log("FizzBuzz");
            break;
        case (n % 3 === 0):
            console.log("Fizz");
            break;
        case (n % 5 === 0):
            console.log("Buzz");
            break;
        default:
            console.log(n);
            break;
    }
}

console.log("\nEsercizio 3 \n");

// esercizio 3
for (let c = 0; c <= 7; c++) {
    let string = "";
    for (let r = 0; r <= 7; r++) {
        string += (c + r) % 2 !== 0 ? "#" : " ";
    }
    console.log(string);
}

console.log("\nEsercizio 3 print unico \n");

// esercizio 3 print unico
let stringFinale = "";
for (let c = 0; c <= 7; c++) {
    let stringRow = "";
    for (let r = 0; r <= 7; r++) {
        stringRow += (c + r) % 2 !== 0 ? "#" : " ";
    }
    stringFinale += stringRow + "\n";
}
console.log(stringFinale);

console.log("\nEsercizio 3 user input \n");

//esercizio 3 user input
let numUtente;
do {
    numUtente = parseInt(prompt("Inserisci un numero per la creazione della scacchiera!"));
} while (isNaN(numUtente) || numUtente <= 0)
let stringFinale2 = "";
if (numUtente > 0) {
    for (let c = 0; c < numUtente; c++) {
        let stringRow = "";
        for (let r = 0; r < numUtente; r++) {
            stringRow += (c + r) % 2 !== 0 ? "#" : " ";
        }
        stringFinale2 += stringRow + "\n";
    }
    console.log(stringFinale2);
} else {
    alert("Inserisci un numero!");
}

console.log("\nEsercizio 1 casa \n");

// esercizio 1 per casa, triangolo con un solo console log
let startString = "";
for (let i = 1; i <= 7; i++) {
    startString += "#".repeat(i) + "\n";
}
console.log(startString);

console.log("\nEsercizio 2 casa \n");

// esercizio 1 per casa, triangolo capovolto
for (let i = 7; i >= 1; i--) {
    console.log("#".repeat(i));
}

console.log("\nEsercizio 3 casa \n");

//esercizio 1 per casa, piramide dispari
let n = 14;
for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n - i) / 2) + "#".repeat(i));
}

console.log("\n");

//esercizio 4 per casa, logga i numeri da 100 a -100
console.log("\nEsercizio 4 casa \n");

for (let i = 100; i >= -100; i--) {
    console.log(i);
}

//esercizio 5 per casa, logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
console.log("\nEsercizio 5 casa \n");

for (let i = 1; i <= 100; i++) {
    if (i%7===0){
        console.log(i+" *");
    } else console.log(i);
}

//esercizio 6 per casa, logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
console.log("\nEsercizio 6 casa \n");

for (let n = 1; n <= 100; n++) {
    let numberPr = n;   
    if (Number.isInteger(Math.sqrt(n))) {
        numberPr += " *";
    }   
    console.log(numberPr);
}

//esercizio 7 per casa, chiedi numero di partenza e arriva a 0
console.log("\nEsercizio 7 casa \n");

let startNum;
do {
    startNum = parseInt(prompt("Inserisci un numero di partenza per arrivare a 0"));
} while (isNaN(startNum));
if (startNum >= 0){
    while (startNum >= 0) {
        console.log(startNum);
        startNum--;
    }
} else {
    while (startNum <= 0) {
        console.log(startNum);
        startNum++;
    }
}

//esercizio 8 per casa, chiedi numero di partenza e arriva a 100
console.log("\nEsercizio 8 casa \n");

let askedNum;
do {
    askedNum = parseInt(prompt("Inserisci un numero di partenza per arrivare a 100"));
} while (isNaN(askedNum));
if (askedNum >= 100){
    while (askedNum >= 100) {
        console.log(askedNum);
        askedNum--;
    }
} else {
    while (askedNum <= 100) {
        console.log(askedNum);
        askedNum++;
    }
}

//esercizio 9 per casa, chiedi all'utente 2 numeri e logga tutti i numeri pari compresi
console.log("\nEsercizio 9 casa \n");

let num1, num2;
while (true) {
    num1 = parseInt(prompt("Inserisci il primo numero!"));
    num2 = parseInt(prompt("Inserisci il secondo numero!"));
    if (!isNaN(num1) && !isNaN(num2)) {
        break;
    } else {
        alert("Per favore, inserisci due numeri validi!");
    }
}
let start = Math.min(num1, num2);
let end = Math.max(num1, num2);
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//esercizio 10 per casa, chiedi all'utente età e sesso e digli quante ore ha vissuto e quante ore gli mancano da vivere (basato aspettativa di vita media)
console.log("\nEsercizio 10 casa \n");

let etaUtente;
do {
    etaUtente = prompt("Inserisci la tua età!");
    etaUtente = parseInt(etaUtente);
} while (isNaN(etaUtente) || etaUtente <= 0);
let genereUtente;
do {
    genereUtente = prompt("Inserisci il tuo genere, 'M' o 'F':");
} while (!['M', 'm', 'F', 'f'].includes(genereUtente));
let oreVissute = etaUtente * 365 * 24;
let oreDaVivere = (genereUtente === 'M' || genereUtente === 'm') ? (81 - etaUtente) * 365 * 24 : (85 - etaUtente) * 365 * 24;
alert("Hai vissuto circa " + oreVissute + " ore e te ne restano circa " + oreDaVivere + "!");