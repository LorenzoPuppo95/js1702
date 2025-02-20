// Funzione dichiarata usando l'espressione function
const gridaSchiappa = function () {
    console.log("SCHIAPPAAA!!!");
}

// Verifica il tipo di "gridaSchiappa", che è una funzione
console.log(typeof gridaSchiappa);
// Esegue la funzione gridaSchiappa
gridaSchiappa();

// Funzione dichiarata successivamente, ma chiamata prima della sua dichiarazione
// Chiamata alla funzione gridaSchiappa2 con argomento 'pippo'
gridaSchiappa2('pippo');

// Definizione della funzione gridaSchiappa2
function gridaSchiappa2(name) {
    console.log(name + " SCHIAPPAAA!!!");
}

// Funzione freccia che raddoppia un numero
const logDouble = (number) => console.log(number * 2);
// Chiamata alla funzione con l'argomento 20, stampa 40
logDouble(20);
// Stampa il risultato di logDouble(15)
console.log(logDouble(15));

// Funzione tradizionale per sommare due numeri
function sum(number1, number2) {
    // Somma i due numeri e restituisce la somma
    const sum = number1 + number2;
    return sum;
}

// Funzione arrow che somma due numeri
const sumArrow = (n1, n2) => n1 + n2;

// Funzione freccia con valori predefiniti per i parametri
const sumArrow2 = (n1 = 0, n2 = 0) => {
    // Somma i due numeri e restituisce la somma
    const sum = n1 + n2;
    return sum;
}

console.log(sum(3, 5));  // Stampa la somma 8
console.log(sumArrow(7, 8));  // Stampa la somma 15
console.log(sumArrow2(4, 7));  // Stampa la somma 11

const result = sum(20, 12);  // Somma 20 e 12, risultato 32
console.log(result);  // Stampa 32

const result2 = sum(21, 23, 25, 27);  // Somma 21 e 23, risultato 44 (i numeri extra vengono ignorati)
console.log(result2);  // Stampa 44

const result3 = sum(12);  // Somma 12 e 0, risultato 12
console.log(result3);  // Stampa 12

// Esempio di funzione interna (nested function)
const hello = 'ciao';  // Definizione di una variabile globale 'hello'

function sayHelloTo(name) {
    // Funzione annidata che crea una stringa di saluto
    function createHelloString(name) {
        const helloString = "Hello " + name + "!";  // Crea la stringa di saluto
        return helloString;  // Restituisce la stringa di saluto
    }
    const newHello = createHelloString(name);  // Crea la stringa di saluto per 'name'
    console.log(newHello);  // Stampa la stringa di saluto
}
sayHelloTo('sara');  // Esegue sayHelloTo, che a sua volta chiama createHelloString

console.log(hello);  // Stampa "ciao", la variabile globale non viene influenzata dalla funzione interna

// Closure (funzioni che ricordano lo stato delle variabili da cui sono state create)
function createCallTwice(name) {
    const call = name + ',' + name + '!';  // Crea una stringa ripetuta
    const callFunction = () => console.log(call);  // Funzione che stampa la stringa
    return callFunction;  // Restituisce la funzione che stampa la stringa
}

const callTwice = createCallTwice('andrea');  // Crea la funzione con 'andrea'
callTwice();  // Esegue la funzione che stampa "andrea,andrea!"

// Creazione di una funzione che moltiplica un numero con una costante (closure)
function createMultiplier(num) {
    const multiplierFunction = function (numberToMultiply) {
        return numberToMultiply * num;  // Moltiplica il numero fornito con 'num'
    }
    return multiplierFunction;  // Restituisce la funzione moltiplicatrice
}
const multiplierX2 = createMultiplier(2);  // Funzione per moltiplicare per 2
const multiplierX3 = createMultiplier(3);  // Funzione per moltiplicare per 3
console.log(multiplierX2(10));  // Stampa 20 (10 * 2)
console.log(multiplierX2(13));  // Stampa 26 (13 * 2)
console.log(multiplierX3(10));  // Stampa 30 (10 * 3)
console.log(multiplierX3(13));  // Stampa 39 (13 * 3)

// Creazione di una funzione per contare quante volte viene invocata
function createCounter() {
    let counter = 0;  // Variabile di stato che memorizza il conteggio
    const incrementFunction = function () {
        counter++;  // Incrementa il contatore
        return counter;  // Restituisce il valore aggiornato del contatore
    }
    return incrementFunction;  // Restituisce la funzione che incrementa il contatore
}

const increment = createCounter();  // Crea un contatore
console.log(increment());  // Stampa 1
console.log(increment());  // Stampa 2
console.log(increment());  // Stampa 3
console.log(increment());  // Stampa 4
console.log(increment());  // Stampa 5
console.log(increment());  // Stampa 6
console.log(increment());  // Stampa 7

// Esempio di ricorsione (funzione che calcola il fattoriale di un numero)
function fact(number) {
    if (number === 0) {
        return 1;  // Caso base, fattoriale di 0 è 1
    }
    return number * fact(number - 1);  // Chiamata ricorsiva per calcolare il fattoriale
}

console.log(fact(7));  // Stampa 5040 (7! = 7 * 6 * 5 * 4 * 3 * 2 * 1)
console.log(fact(8));  // Stampa 40320 (8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
console.log(fact(170));  // Stampa il fattoriale di 170 (un numero molto grande)