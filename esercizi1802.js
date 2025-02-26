console.log("Esercizio 1 \n");
// esercizio 1
// Inizia un ciclo "for" che parte da i = 0 fino a i = 7
for (let i = 0; i <= 7; i++) {
    // Stampa una stringa composta da "#" ripetuto i+1 volte
    console.log("#".repeat(i + 1));
}

console.log("\nEsercizio 2 \n");

// esercizio 2
// Inizia un ciclo che va da n = 1 fino a n = 100
for (let n = 1; n <= 100; n++) {
    // Inizia una struttura "switch" che utilizza "true" come condizione
    switch (true) {
        // Se il numero è divisibile sia per 5 che per 3, stampa "FizzBuzz"
        case (n % 5 === 0 && n % 3 === 0):
            console.log("FizzBuzz");
            break;
        // Se il numero è divisibile solo per 3, stampa "Fizz"
        case (n % 3 === 0):
            console.log("Fizz");
            break;
        // Se il numero è divisibile solo per 5, stampa "Buzz"
        case (n % 5 === 0):
            console.log("Buzz");
            break;
        // Se nessuna delle condizioni precedenti è soddisfatta, stampa il numero stesso
        default:
            console.log(n);
            break;
    }
}

console.log("\nEsercizio 3 \n");

// esercizio 3
// Inizia un ciclo esterno che va da c = 0 fino a c = 7 (per le righe)
for (let c = 0; c <= 7; c++) {
    // Inizializza una stringa vuota che rappresenterà una riga della scacchiera
    let stringRiga = "";    
    // Inizia un ciclo interno che va da r = 0 fino a r = 7 (per le colonne)
    for (let r = 0; r <= 7; r++) {
        // Se la somma di c e r è dispari, aggiungi "#" alla stringa, altrimenti aggiungi uno spazio
        stringRiga += (c + r) % 2 !== 0 ? "#" : " ";
    }  
    // Dopo aver costruito la riga, stampa la stringa risultante
    console.log(stringRiga);
}

console.log("\nEsercizio 3 print unico \n");

// esercizio 3 print unico
// Inizializza una variabile stringFinale vuota per contenere l'intera scacchiera
let stringFinale = "";
// Inizia un ciclo esterno che va da c = 0 fino a c = 7 (per le righe)
for (let c = 0; c <= 7; c++) {
    // Inizializza una variabile stringRow vuota per costruire ogni riga della scacchiera
    let stringRow = "";
    // Inizia un ciclo interno che va da r = 0 fino a r = 7 (per le colonne)
    for (let r = 0; r <= 7; r++) {
        // Se la somma di c e r è dispari, aggiungi "#" alla riga, altrimenti aggiungi uno spazio
        stringRow += (c + r) % 2 !== 0 ? "#" : " ";
    }
    // Aggiungi la riga costruita e un carattere di nuova linea "\n" alla variabile stringFinale
    stringFinale += stringRow + "\n";
}
// Dopo aver costruito l'intera scacchiera, stampa la stringa finale
console.log(stringFinale);

console.log("\nEsercizio 3 user input \n");

//esercizio 3 user input
// Dichiarazione della variabile per memorizzare il numero inserito dall'utente
let numUtente;
// Richiesta di input all'utente tramite prompt e controllo che sia un numero positivo
do {
    numUtente = parseInt(prompt("Inserisci un numero per la creazione della scacchiera!"));
} while (isNaN(numUtente) || numUtente <= 0)  // Continua a chiedere finché l'input non è valido
// Inizializzazione di una variabile per contenere la scacchiera finale
let stringFinale2 = "";
// Se il numero inserito è maggiore di 0 (anche se la condizione do-while garantisce che lo sia)
if (numUtente > 0) {
    // Ciclo esterno per le righe della scacchiera
    for (let c = 0; c < numUtente; c++) {
        // Inizializza una stringa vuota per una riga della scacchiera
        let stringRow = "";
        // Ciclo interno per le colonne della scacchiera
        for (let r = 0; r < numUtente; r++) {
            // Se la somma dell'indice della riga e della colonna è dispari, aggiungi "#", altrimenti aggiungi uno spazio
            stringRow += (c + r) % 2 !== 0 ? "#" : " ";
        }
        // Aggiungi la riga costruita alla stringa finale, con un carattere di nuova linea
        stringFinale2 += stringRow + "\n";
    }
    // Stampa la scacchiera finale costruita
    console.log(stringFinale2);
} else {
    // Se il numero è 0 o negativo (anche se questa condizione non verrà mai verificata grazie al controllo do-while), mostra un avviso
    alert("Inserisci un numero!");
}

console.log("\nEsercizio 1 casa \n");

// esercizio 1 per casa, triangolo con un solo console log
// Inizializza una variabile vuota per contenere la stringa finale
let startString = "";
// Inizia un ciclo che va da i = 1 fino a i = 7 (8 iterazioni in totale)
for (let i = 1; i <= 7; i++) {
    // Aggiungi a startString una riga composta da "#" ripetuto i volte, seguito da un carattere di nuova linea "\n"
    startString += "#".repeat(i) + "\n";
}
// Stampa la stringa finale che rappresenta la piramide di "#"
console.log(startString);

console.log("\nEsercizio 2 casa \n");

// esercizio 2 per casa, triangolo capovolto
// Inizia un ciclo che parte da i = 7 e scende fino a i = 1 (decremento)
for (let i = 7; i >= 1; i--) {
    // Stampa una riga composta da "#" ripetuto i volte
    console.log("#".repeat(i));
}

console.log("\nEsercizio 3 casa \n");

//esercizio 3 per casa, piramide dispari
// Inizializza la variabile n con il valore 14, che rappresenta l'altezza della piramide
let n = 14;
// Inizia un ciclo che va da i = 1 fino a i <= n, incrementando i di 2 ad ogni iterazione (per stampare solo numeri dispari)
for (let i = 1; i <= n; i += 2) {
    // Calcola gli spazi da aggiungere per centrare il simbolo "#" al centro della riga
    // (n - i) / 2 calcola il numero di spazi necessari per centrare "#". 
    // Aggiungi i simboli "#" ripetuti i volte
    console.log(" ".repeat((n - i) / 2) + "#".repeat(i));
}
// Aggiungi una riga vuota alla fine (opzionale, se desideri solo una riga vuota separatrice)
console.log("\n");

console.log("\nEsercizio 4 casa \n");

//esercizio 4 per casa, logga i numeri da 100 a -100
// Inizia un ciclo che parte da i = 100 e decrementa fino a i = -100
// Ad ogni iterazione, il valore di i viene ridotto di 1
for (let i = 100; i >= -100; i--) {
    // Stampa il valore corrente di i ad ogni iterazione
    console.log(i);
}

//esercizio 5 per casa, logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7
console.log("\nEsercizio 5 casa \n");

// Inizia un ciclo che va da i = 1 fino a i = 100 (incluso)
for (let i = 1; i <= 100; i++) {
    // Se i è un multiplo di 7, stampa i seguito da un asterisco
    if (i % 7 === 0) {
        console.log(i + " *");
    } else {
        // Altrimenti, stampa solo il valore di i
        console.log(i);
    }
}

//esercizio 6 per casa, logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
console.log("\nEsercizio 6 casa \n");

// Inizia un ciclo che va da n = 1 fino a n = 100 (incluso)
for (let n = 1; n <= 100; n++) {
    // Imposta numberPr uguale a n
    let numberPr = n;
    // Controlla se la radice quadrata di n è un numero intero (cioè se n è un quadrato perfetto)
    if (Number.isInteger(Math.sqrt(n))) {
        // Se n è un quadrato perfetto, aggiungi " *" alla variabile numberPr
        numberPr += " *";
    }
    // Stampa il valore di numberPr (n con l'asterisco se n è un quadrato perfetto)
    console.log(numberPr);
}

//esercizio 7 per casa, chiedi numero di partenza e arriva a 0
console.log("\nEsercizio 7 casa \n");

// Chiede all'utente di inserire un numero di partenza per arrivare a 0
let startNum;
// Continuare a chiedere finché l'utente non inserisce un numero valido
do {
    startNum = parseInt(prompt("Inserisci un numero di partenza per arrivare a 0"));
} while (isNaN(startNum));
// Se il numero di partenza è maggiore o uguale a 0
if (startNum >= 0) {
    // Continua a decrementare startNum finché non arriva a 0
    while (startNum >= 0) {
        console.log(startNum);  // Stampa il valore attuale di startNum
        startNum--;             // Decrementa startNum di 1
    }
} else {
    // Se il numero di partenza è negativo
    while (startNum <= 0) {
        console.log(startNum);  // Stampa il valore attuale di startNum
        startNum++;             // Incrementa startNum di 1
    }
}

//esercizio 8 per casa, chiedi numero di partenza e arriva a 100
console.log("\nEsercizio 8 casa \n");

// Chiede all'utente di inserire un numero di partenza per arrivare a 100
let askedNum;
// Continua a chiedere finché l'utente non inserisce un numero valido
do {
    askedNum = parseInt(prompt("Inserisci un numero di partenza per arrivare a 100"));
} while (isNaN(askedNum));  // Controlla se il numero è valido (non è NaN)
// Se il numero inserito è maggiore o uguale a 100
if (askedNum >= 100) {
    // Continua a decrementare askedNum finché non raggiunge 100
    while (askedNum >= 100) {
        console.log(askedNum);  // Stampa il valore attuale di askedNum
        askedNum--;             // Decrementa askedNum di 1
    }
} else {
    // Se il numero inserito è minore di 100
    while (askedNum <= 100) {
        console.log(askedNum);  // Stampa il valore attuale di askedNum
        askedNum++;             // Incrementa askedNum di 1
    }
}

//esercizio 9 per casa, chiedi all'utente 2 numeri e logga tutti i numeri pari compresi
console.log("\nEsercizio 9 casa \n");

// Dichiara le variabili num1 e num2 per memorizzare i numeri inseriti dall'utente
let num1, num2;
// Inizia un ciclo infinito che continua a chiedere i numeri finché non sono validi
while (true) {
    // Chiede all'utente di inserire il primo e il secondo numero
    num1 = parseInt(prompt("Inserisci il primo numero!"));
    num2 = parseInt(prompt("Inserisci il secondo numero!"));
    // Verifica se entrambi i numeri sono validi (non sono NaN)
    if (!isNaN(num1) && !isNaN(num2)) {
        // Se entrambi i numeri sono validi, esce dal ciclo
        break;
    } else {
        // Se uno dei numeri non è valido, mostra un messaggio di errore e ripete la richiesta
        alert("Per favore, inserisci due numeri validi!");
    }
}
// Determina il numero più piccolo (start) e il più grande (end) tra i due numeri
let start = Math.min(num1, num2);
let end = Math.max(num1, num2);
// Esegui un ciclo che parte da 'start' e arriva fino a 'end'
for (let i = start; i <= end; i++) {
    // Se 'i' è un numero pari, lo stampa nella console
    if (i % 2 === 0) {
        console.log(i);
    }
}

//esercizio 10 per casa, chiedi all'utente età e sesso e digli quante ore ha vissuto e quante ore gli mancano da vivere (basato aspettativa di vita media)
console.log("\nEsercizio 10 casa \n");

// Dichiara la variabile per l'età dell'utente
let etaUtente;
// Richiede l'età dell'utente finché non viene inserito un numero valido e positivo
do {
    etaUtente = prompt("Inserisci la tua età!");  // Chiede l'età dell'utente tramite prompt
    etaUtente = parseInt(etaUtente);  // Converte l'input in un numero intero
} while (isNaN(etaUtente) || etaUtente <= 0);  // Continua finché l'input non è un numero valido e maggiore di 0
// Dichiara la variabile per il genere dell'utente
let genereUtente;
// Richiede il genere dell'utente finché non viene inserito uno dei valori validi ('M', 'F', 'm', 'f')
do {
    genereUtente = prompt("Inserisci il tuo genere, 'M' o 'F':");  // Chiede il genere dell'utente tramite prompt
} while (!['M', 'm', 'F', 'f'].includes(genereUtente));  // Continua finché l'input non è uno dei valori accettati
// Calcola il numero di ore vissute dall'utente
let oreVissute = etaUtente * 365 * 24;  // Moltiplica l'età per 365 giorni e 24 ore per ottenere il totale delle ore vissute
// Calcola il numero di ore restanti da vivere in base al genere dell'utente
let oreDaVivere = (genereUtente === 'M' || genereUtente === 'm') ? 
    (81 - etaUtente) * 365 * 24 :  // Se il genere è maschile, si suppone una vita media di 81 anni
    (85 - etaUtente) * 365 * 24;   // Se il genere è femminile, si suppone una v