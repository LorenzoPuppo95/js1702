// Stampa di "hello world" e "ciao mondo" nel console log
console.log("hello world");
console.log("ciao mondo");
console.log("hello world");

// Operatore typeof per determinare il tipo di variabile
console.log(typeof 5);  // Numero intero
console.log(typeof "hello world");  // Stringa
console.log(typeof 5);  // Numero intero
console.log(typeof true);  // Booleano

// Dichiarazione di numeri interi e decimali (float)
5; // Intero
6.98; // Float

// Notazione scientifica per numeri grandi
3.1e5; // 310000

// Rappresentazione dei numeri infinito e negativo infinito
Infinity; // Numero più grande possibile
-Infinity; // Numero più piccolo possibile

// Notazione NaN (Not a Number)
NaN; // Not a Number (indica un valore che non è un numero)

console.log(typeof NaN);  // Verifica che NaN è di tipo "number"
console.log(0 / 0);  // Risultato NaN, divisione di 0 per 0

// Operazioni aritmetiche di base
console.log("somma 5 + 7", 5 + 7);  // Somma di 5 e 7
console.log("sottrazione 5 - 7", 5 - 7);  // Sottrazione di 5 e 7
console.log("prodotto 5 * 7", 5 * 7);  // Moltiplicazione di 5 e 7
console.log("divisione 5 / 7", 5 / 7);  // Divisione di 5 e 7
console.log("potenza 5 ** 7", 5 ** 7);  // 5 elevato alla potenza 7
console.log("resto 5 % 7", 5 % 7);  // Resto della divisione 5 / 7

// Funzioni matematiche
console.log("radice quadrata 9", Math.sqrt(9));  // Radice quadrata di 9
console.log("arrotondamento 9.6", Math.round(9.6));  // Arrotondamento di 9.6
console.log("arrotondamento per difetto 9.6", Math.floor(9.6));  // Arrotondamento per difetto di 9.6

// Lavorare con le stringhe
console.log("234", 234);  // Stampa la stringa "234" e il numero 234
console.log("io sono una stringa");  // Stampa una stringa
console.log('io sono una stringa');  // Stampa una stringa con apostrofo
console.log('io sono una "stringa"');  // Stringa con virgolette interne
console.log("l'apostrofo è importante");  // Stringa con apostrofo
console.log("\"l'apostrofo\" è importante \n davvero");  // Stringa con escape di caratteri speciali
console.log(`"l'apostrofo è importante \n davvero`);  // Stringa con template literals (interpolazione)

console.log(`la somma di 5 e 7 è ${7 + 5}`);  // Utilizzo di template literals per eseguire operazioni direttamente nella stringa
console.log("ciao a tutti" + " " + "mi chiamo pippo");  // Concatenazione di stringhe

// Booleani
console.log("vero", true);  // Stampa "vero"
console.log("falso", false);  // Stampa "falso"

// Operatori logici
console.log("not vero", !true);  // Negazione (not) di true
console.log("not falso", !false);  // Negazione (not) di false

// Operatori AND (&&)
console.log("true and true", true && true);  // true AND true
console.log("true and false", true && false);  // true AND false
console.log("false and true", false && true);  // false AND true
console.log("false and false", false && false);  // false AND false

// Operatori OR (||)
console.log("true or true", true || true);  // true OR true
console.log("true or false", true || false);  // true OR false
console.log("false or true", false || true);  // false OR true
console.log("false or false", false || false);  // false OR false

// undefined e null
console.log(typeof undefined);  // Tipo di undefined
console.log(typeof null);  // Tipo di null

// Confronto di uguaglianza con "==" e "===" 
console.log("cinque è uguale a cinque", 5 == 5);  // Confronto con == (uguale)
console.log("cinque è uguale a sei", 5 == 6);  // Confronto con == (non uguale)
console.log("cinque è uguale a cinque", 5 === 5);  // Confronto con === (uguale e stesso tipo)
console.log("cinque è uguale a sei", 5 === 6);  // Confronto con === (non uguale e diverso tipo)

console.log("la stringa 5 è uguale al numero 5", "5" == 5);  // Stringa "5" uguale a numero 5 con == (conversione tipo)
console.log("la stringa 5 è uguale al numero 5", "5" === 5);  // Stringa "5" uguale a numero 5 con === (senza conversione tipo)

// Disuguaglianza con "!=" e "!=="
console.log("la stringa 6 è diversa dal numero 6", "6" != 6);  // Stringa "6" diversa da numero 6 con !=
console.log("la stringa 6 è diversa dal numero 6", "6" !== 6);  // Stringa "6" diversa da numero 6 con !==

// Confronto di grandezza con "<", "<=", ">", ">="
console.log("5 è minore di 6", 5 < 6);  // Confronto di grandezza (minore di)
console.log("5 è maggiore di 6", 5 > 6);  // Confronto di grandezza (maggiore di)

console.log("a è maggiore di b", "a" > "b");  // Confronto tra lettere
console.log("a è minore di b", "a" < "b");  // Confronto tra lettere
console.log("a è maggiore di A", "a" > "A");  // Confronto tra lettere maiuscole e minuscole
console.log("b è maggiore di A", "b" > "A");  // Confronto tra lettere maiuscole e minuscole

// Dichiarazione di variabili con var, let, const
let pippo = 5;  // Dichiarazione con "let"
console.log(pippo + 2);  // Stampa pippo + 2

pippo = "stocazzo";  // Riassegnazione di valore a pippo
console.log(pippo);  // Stampa il nuovo valore di pippo

const pluto = 5;  // Dichiarazione con "const"
console.log(pluto + 2);  // Stampa pluto + 2

// Con "const" non è possibile modificare il valore
// pluto = "stocazzo";  // Errore: Cannot assign to 'pluto' because it is a constant variable

// Comportamento problematico con "var" (non usarlo)
paperino = 10;  // Dichiara una variabile senza "var", "let" o "const" (non corretto)
console.log(paperino + 10);  // Stampa valore non dichiarato

// "var" dichiarato in modo improprio
var paperino = 5;  // Dichiarazione corretta con "var"
console.log(paperino + 10);  // Stampa paperino + 10

// Con "let" si corregge il comportamento malsano che avrebbe "var"
let paperino = 5;  // Dichiarazione con "let"
console.log(paperino + 10);  // Stampa paperino + 10

// Convenzione di denominazione in camelCase
const numeroDaElevareAPotenza = 9;  // Variabile con camelCase
const esponenteDellaPotenza = 9;  // Variabile con camelCase

console.log(numeroDaElevareAPotenza ** esponenteDellaPotenza);  // Calcola la potenza di numeroDaElevareAPotenza elevato a esponenteDellaPotenza

// Esempi di operatore short-circuit
const qui = 5 || 6;  // Restituisce il primo valore "vero"
console.log(qui);

const quo = false || 6;  // Restituisce 6 perché il primo valore è "falso"
console.log(quo);

const qua = 5 ?? 6;  // Utilizza l'operatore "nullish coalescing" (restituisce 5)
console.log(qua);

const que = false ?? 6;  // Utilizza l'operatore "nullish coalescing" (restituisce 6)
console.log(que);

const quu = undefined ?? 6;  // Restituisce 6 perché il primo valore è "undefined"
console.log(quu);

const quack = (5 > 4) ? 10 : 20;  // Operatore ternario per condizione
console.log(quack);

const quick = (5 < 4) ? 10 : 20;  // Operatore ternario per condizione
console.log(quick);