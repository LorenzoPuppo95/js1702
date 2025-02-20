// // Chiediamo all'utente il suo nome e lo salutiamo con un alert
// const userName = prompt("come ti chiami?");
// alert("perfetto allora tu sei " + userName);

// // IF
// // Chiediamo all'utente l'età e mostriamo un messaggio basato sull'età
// const userAgeString = prompt("quanti anni hai?");

// // Controlliamo se l'età (convertita in numero intero) è maggiore di 18
// if(parseInt(userAge) > 18) {
//     alert("benvenuto nel sito di incontri piccanti");
// } else {
//     alert("tu non puoi passare");
// };

// // Converting age string to number
// const userAgeNumber = parseInt(userAgeString);

// // Se l'età è tra 18 e 80, mostriamo un messaggio di benvenuto. 
// // Se l'età è maggiore o uguale a 80, mostriamo un altro messaggio.
// if(userAgeNumber >= 18 && userAgeNumber < 80) {
//     alert("benvenuto nel sito di incontri piccanti");
// } else if (userAgeNumber >= 80) {
//     alert("tu non puoi passare!");
// } else {
//     alert("torna a mangiare il gelatino");
// };

// // I TRICICLI
// // I cicli sono utilizzati per ripetere un blocco di codice più volte

// // Ciclo while: continua a raddoppiare "i" mentre "i" è minore di 1e50
// let i = 1;
// while (i < 1e50) {
//     console.log(i);  // stampa "i"
//     i += i;  // raddoppia  "i"
// }
// console.log(i);  // stampiamo il valore finale di "i"

// // Ciclo while: stampiamo i quadrati dei numeri da 0 a 10
// let i = 0;
// while (i <= 10) {
//     const square = i ** 2;  // calcoliamo il quadrato
//     console.log(square);  // stampiamo il quadrato
//     i++;  // incrementiamo "i"
// }

// // Indovina il numero: chiediamo all'utente di indovinare un numero casuale
// const secretNumber = Math.round(Math.random() * 10)  // generiamo un numero casuale da 0 a 10

// // Ciclo infinito che chiede all'utente di indovinare il numero
// while (true) {
//     const guessedString = prompt("indovina il numero a cui sto pensando (da 0 a 10)...");
//     const guessedNumber = parseInt(guessedString);  // converte l'input in numero
//     if (guessedNumber === secretNumber) {
//         alert("hai indovinato");  // se l'utente indovina, esce dal ciclo
//         break;
//     } else {
//         alert("schiappa");  // se non indovina, chiediamo di riprovare
//     }
// }

// // Ciclo che costruisce una stringa di asterischi ("*") fino a raggiungere la lunghezza 10
// let startingString = '';
// while(startingString.length <= 10){
//     startingString+="*";  // aggiungiamo un asterisco
// }
// console.log(startingString);  // stampiamo la stringa finale di asterischi

// // do...while: questo ciclo viene eseguito almeno una volta, anche se la condizione è falsa
// const pippo = 10;
// const pluto = 20;

// // Ciclo while che non verrà mai eseguito perché la condizione non è mai vera
// while (pippo > pluto){
//     console.log('sono entrato');
// }

// // Ciclo do...while che si esegue almeno una volta
// do {
//     console.log('sono entrato nel do');  // viene eseguito una sola volta
// } while (pippo > pluto);  // la condizione è falsa, quindi non verrà mai eseguito di nuovo

// // Ciclo for: un ciclo per stampare "ciclo 0", "ciclo 1", etc.
// for (let i = 0; i < 10; i++) {
//     console.log("ciclo " + i);
// }

// // Ciclo infinito che aggiunge "#" alla stringa finché non raggiunge 10 caratteri
// let string = "";
// for (;;) {  // ciclo infinito
//     string += "#";
//     if (string.length === 10) {
//         break;  // esce dal ciclo quando la stringa ha 10 caratteri
//     }   
// }
// console.log(string);  // stampa la stringa con 10 "#"

// // Ciclo annidato for: crea righe e colonne in un formato (x, y)
// for (let y = 3; y >= 0; y--) {
//     let row = "";
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y})`;  // aggiunge il valore di x e y alla riga
//     }
//     console.log(row);  // stampa ogni riga
// }

// switch case: permette di eseguire diversi blocchi di codice in base al valore dell'anno di nascita
const ageStr = prompt("in che anno sei nato?");

switch (ageStr) {
    case "1978":
        alert("sei nato nel mio anno");  // messaggio per l'anno 1978
        break;
    case "1990":
        alert("sei nato nell'anno dei mondiali in italia");  // messaggio per l'anno 1990
        break;
    case "1984":
        alert("sei nato nell'anno di laura");  // messaggio per l'anno 1984
        break;
    default:
        alert("che anno noioso");  // messaggio per qualsiasi altro anno
        break;
}