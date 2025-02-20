// Definizione di una variabile "pippo" e assegnamento del valore 12
const pippo = 12;

// Creazione di un array "array1" contenente numeri e una stringa, inclusa la variabile "pippo"
const array1 = [12, 13, "ciao", pippo];

// Stampa dell'array "array1" nella console
console.log(array1);

// Creazione di un array vuoto "array2"
const array2 = [];

// Aggiunta del valore 4 all'array2 utilizzando il metodo push()
array2.push(4);

// Aggiunta del valore 2 all'array2 utilizzando il metodo push()
array2.push(2);

// Stampa dell'array2 dopo aver aggiunto i due elementi
console.log('array2 push', array2);

// Rimozione dell'ultimo elemento dell'array2 con il metodo pop() e salvataggio del valore rimosso in "removed"
const removed = array2.pop();

// Stampa dell'array2 dopo la rimozione dell'ultimo elemento e del valore rimosso
console.log('array2 pop', array2, removed);

// Aggiunta del valore 11 all'inizio dell'array2 utilizzando il metodo unshift()
array2.unshift(11);

// Aggiunta del valore 12 all'inizio dell'array2 utilizzando il metodo unshift()
array2.unshift(12);

// Stampa dell'array2 dopo aver aggiunto i due nuovi valori all'inizio
console.log('array2 unshift', array2);

// Rimozione del primo elemento dell'array2 con il metodo shift() e salvataggio del valore rimosso in "removed2"
const removed2 = array2.shift();

// Stampa dell'array2 dopo la rimozione del primo elemento e dei valori rimossi (removed e removed2)
console.log('array2 shift', array2, removed, removed2);

// Stampa del secondo elemento dell'array2 (indice 1)
console.log('get array2 second element', array2[1]);

// Modifica il secondo elemento dell'array (indice 1) e lo imposta a 25
array2[1] = 25;

// Stampa dell'array2 dopo aver cambiato il secondo elemento
console.log('change array second element', array2);

// Creazione di un array "array3" contenente numeri
const array3 = [123, 12, 45, 34, 1, 2, 45, 34];

// Ciclo "for" per iterare su ogni elemento dell'array3
for (let i = 0; i < array3.length; i++) {
    // Assegna l'elemento corrente dell'array3 alla variabile "element"
    const element = array3[i];
    // Stampa l'elemento con il suo indice
    console.log(`L'elemento ad indice ${i} è ${element}`);
}

// Ciclo "for...of" per iterare su ogni elemento dell'array3
for (const element of array3) {
    // Stampa l'elemento corrente
    console.log(element);
}

// Creazione di un array "array4" con due numeri
const array4 = [1000, 1001];

// Creazione di un nuovo array "array5" concatenando array3 e array4
const array5 = array3.concat(array4);

// Stampa dell'array risultante dalla concatenazione
console.log('concat', array5);

// Creazione di un nuovo array "array6" che contiene una porzione di "array5" usando slice
// slice(2, -2): parte dall'indice 2 (incluso) fino a -2 (escludendo gli ultimi due elementi)
const array6 = array5.slice(2, -2);

// Stampa di "array5" e della sua porzione "array6"
console.log('slice', array5, array6);

// Rimozione di 3 elementi a partire dall'indice 1 usando splice()
// splice(1, 3) rimuove 3 elementi, partendo dall'indice 1
const removedElements = array5.splice(1, 3);

// Stampa di "array5" dopo la rimozione e degli elementi rimossi
console.log('splice', array5, removedElements);

// Ordinamento di "array5" in ordine alfabetico
array5.sort();

// Stampa di "array5" dopo l'ordinamento
console.log('sort', array5);

// Trova l'indice dell'elemento "1000" in "array5" usando indexOf()
// indexOf(1000) restituisce l'indice dell'elemento, o -1 se non trovato
const index = array5.indexOf(1000);

// Stampa l'indice in cui si trova "1000"
console.log('1000 è a indice', index);

// Creazione di un array "array7" contenente una serie di numeri
const array7 = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4];
console.log('array7', array7)

//MAPPING
// In JavaScript, un mapping di array si riferisce al processo di applicare una funzione a ciascun elemento 
// di un array per creare un nuovo array con i risultati.

// Funzione che raddoppia gli elementi di un array di numeri
function doubleArrayElements(arrayOfNumbers) {
    // Creazione di un nuovo array vuoto per memorizzare i risultati
    const newArray = [];
    // Ciclo attraverso ogni elemento dell'array "arrayOfNumbers"
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Assegno l'elemento corrente all'interno dell'array
        const element = arrayOfNumbers[i];
        // Aggiungo il doppio dell'elemento all'array "newArray"
        newArray.push(element * 2);
    }
    // Restituisco il nuovo array con gli elementi raddoppiati
    return newArray;
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array8"
const array8 = doubleArrayElements(array7);
// Stampa dell'array originale raddoppiato
console.log('array7 doppio', array8);

// Funzione che aggiunge 1 a ciascun elemento di un array di numeri
function addOneToArrayElements(arrayOfNumbers) {
    // Creazione di un nuovo array vuoto per memorizzare i risultati
    const newArray = [];
    // Ciclo attraverso ogni elemento dell'array "arrayOfNumbers"
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Assegno l'elemento corrente all'interno dell'array
        const element = arrayOfNumbers[i];
        // Aggiungo 1 all'elemento e lo inserisco nell'array "newArray"
        newArray.push(element + 1);
    }
    // Restituisco il nuovo array con gli elementi incrementati di uno
    return newArray;
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array9"
const array9 = addOneToArrayElements(array7);
// Stampa dell'array originale con gli elementi incrementati di uno
console.log('array7 più uno', array9);

// // esempio con funzione .map()
// // Funzione che aggiunge 1 a ciascun elemento di un array di numeri usando map
// function addOneToArrayElements(arrayOfNumbers) {
//     // Uso map per aggiungere 1 a ciascun elemento dell'array
//     return arrayOfNumbers.map(element => element + 1);
// }

// Funzione che rimuove gli elementi maggiori di 30 da un array
function removeLargerThan30(arrayOfNumbers) {
    // Creazione di un nuovo array per memorizzare i risultati
    const newArray = [];
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        // Aggiungo l'elemento all'array solo se è minore o uguale a 30
        if (element <= 30) {
            newArray.push(element);
        }
    }
    // Restituisco il nuovo array con solo gli elementi <= 30
    return newArray;
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array10"
const array10 = removeLargerThan30(array7);
// Stampa dell'array originale con solo gli elementi minori o uguali a 30
console.log('array7 con elementi <= 30', array10);

// Funzione che rimuove i numeri dispari da un array, mantenendo solo i numeri pari
function removeOddNumbers(arrayOfNumbers) {
    // Creazione di un nuovo array per memorizzare i numeri pari
    const newArray = [];
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        // Aggiungo l'elemento all'array solo se è pari (resto della divisione per 2 è 0)
        if (element % 2 === 0) {
            newArray.push(element);
        }
    }
    // Restituisco il nuovo array con solo i numeri pari
    return newArray;
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array11"
const array11 = removeOddNumbers(array7);
// Stampa dell'array con solo i numeri pari (dispari rimossi)
console.log('array7 numeri pari', array11);

// // esempio con funzione .filter()
// // Funzione che rimuove i numeri dispari da un array
// function removeOddNumbers(arrayOfNumbers) {
//     // Uso filter per mantenere solo gli elementi pari
//     return arrayOfNumbers.filter(element => element % 2 === 0);
// }

// reducing
// Funzione che somma tutti gli elementi di un array di numeri
function sumAllElements(arrayOfNumbers) {
    let accumulator = 0;  // Variabile che memorizza la somma progressiva degli elementi  
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];  // Assegno l'elemento corrente
        accumulator = accumulator + element;  // Aggiungo l'elemento all'accumulatore
    }
    // Restituisco la somma totale degli elementi
    return accumulator;
}
// Chiamata della funzione "sumAllElements" con "array7" come input
// Il risultato (somma di tutti gli elementi di array7) viene salvato in "array12"
const array12 = sumAllElements(array7);
// Stampa della somma degli elementi di "array7"
console.log('somma degli elementi', array12);

// Funzione che moltiplica tutti gli elementi di un array di numeri
function multiplyAllElements(arrayOfNumbers) {
    // Variabile che memorizza il prodotto progressivo degli elementi
    let accumulator = 1; //Imposto ad 1 altrimenti la moltiplicazione darebbe sempre 0
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];  // Assegno l'elemento corrente dell'array
        accumulator = accumulator * element;  // Moltiplico l'accumulatore per l'elemento corrente
    }
    // Restituisco il prodotto totale degli elementi
    return accumulator;
}
// Chiamata della funzione "multiplyAllElements" con "array7" come input
// Il risultato (prodotto di tutti gli elementi di array7) viene salvato in "array13"
const array13 = multiplyAllElements(array7);
// Stampa del prodotto degli elementi di "array7"
console.log('prodotto degli elementi', array13);

// Funzione che somma tutti gli elementi dispari di un array
function sumAllOddElements(arrayOfNumbers) {
    let accumulator = 0;  // Variabile che accumula la somma degli elementi dispari
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];  // Assegno l'elemento corrente
        // Verifico se l'elemento è dispari
        if (element % 2 !== 0) {
            accumulator = accumulator + element;  // Sommo l'elemento dispari all'accumulatore
        }
    }
    return accumulator;  // Restituisco la somma degli elementi dispari
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array14"
const array14 = sumAllOddElements(array7);
// Stampa della somma dei numeri dispari contenuti in "array7"
console.log('somma numeri dispari', array14);

// Funzione che somma tutti gli elementi pari di un array
function sumAllEvenElements(arrayOfNumbers) {
    // Concatenazione delle funzioni: prima rimuovo i numeri dispari, poi sommo i numeri pari rimasti
    return sumAllElements(removeOddNumbers(arrayOfNumbers));
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array15"
const array15 = sumAllEvenElements(array7);
// Stampa della somma degli elementi pari (dopo aver rimosso i numeri dispari)
console.log('functions concatenation', array15);

// Esecuzione diretta della concatenazione delle funzioni senza l'uso di una funzione separata
const array16 = sumAllElements(removeOddNumbers(array7));
// Stampa del risultato della somma degli elementi pari
console.log('functions concatenation', array16);

// Funzione che somma separatamente gli elementi pari e dispari di un array
function sumEvenAndSumOdd(arrayOfNumbers) {
    let accumulatorEven = 0;  // Variabile per accumulare la somma degli elementi pari
    let accumulatorOdd = 0;   // Variabile per accumulare la somma degli elementi dispari  
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];  // Assegno l'elemento corrente       
        // Verifico se l'elemento è pari
        if (element % 2 === 0) {
            accumulatorEven = accumulatorEven + element;  // Sommo l'elemento pari
        } else {
            accumulatorOdd = accumulatorOdd + element;   // Sommo l'elemento dispari
        }
    }
    // Restituisco un array con la somma degli elementi pari e la somma degli elementi dispari
    return [accumulatorEven, accumulatorOdd];
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array17"
// La funzione restituirà un array con la somma degli elementi pari come primo valore e quella degli elementi dispari come secondo valore
const array17 = sumEvenAndSumOdd(array7);
// Stampa dell'array restituito dalla funzione, che contiene la somma degli elementi pari e dispari
console.log('reduce', array17);

// Funzione che somma separatamente gli elementi pari e dispari di un array
function sumEvenAndSumOdd2(arrayOfNumbers) {
    let accumulator = [0, 0];  // Array che memorizza separatamente la somma degli elementi pari (accumulator[0]) e dispari (accumulator[1])    
    // Ciclo attraverso ogni elemento dell'array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];  // Assegno l'elemento corrente       
        // Verifico se l'elemento è pari
        if (element % 2 === 0) {
            accumulator[0] = accumulator[0] + element;  // Sommo l'elemento pari (accumulator[0])
        } else {
            accumulator[1] = accumulator[1] + element;   // Sommo l'elemento dispari (accumulator[1])
        }
    }
    // Restituisco l'array "accumulator" con la somma degli elementi pari (accumulator[0]) e dispari (accumulator[1])
    return accumulator;
}
// Chiamata della funzione con "array7" e salvataggio del risultato in "array18"
// La funzione restituirà un array con la somma degli elementi pari come primo valore e la somma degli elementi dispari come secondo valore
const array18 = sumEvenAndSumOdd2(array7);
// Stampa dell'array restituito dalla funzione, che contiene la somma degli elementi pari e dispari
console.log('reduce', array18);


//intervallo
let number1 = 27;
function stupidFunction(number) {
    number = number * 2;
}
stupidFunction(number1);
console.log(number1);