const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//esercizio 1: filtrare tutti i numeri minori o uguali a 0
// Funzione che rimuove i numeri positivi da un array e restituisce un nuovo array con solo numeri minori o uguali a zero
function removePositiveNumbers(arrayOfNumbers) {
    // Crea un nuovo array vuoto in cui verranno aggiunti gli elementi che soddisfano la condizione
    const newArray = [];    
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Prende l'elemento corrente dell'array
        const element = arrayOfNumbers[i];        
        // Se l'elemento è minore o uguale a zero (negativo o zero), aggiungilo al nuovo array
        if (element <= 0) {
            newArray.push(element);
        }
    }  
    // Restituisce il nuovo array che contiene solo i numeri minori o uguali a zero
    return newArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array1'
const arrayResult1 = removePositiveNumbers(array1);
// Stampa il risultato, ovvero l'array con solo numeri negativi o zero
console.log('array numeri negativi', arrayResult1);


//esercizio 2: convertire in gradi fahrenheit ipotizzando che l'unità di partenza sia celsius
// Funzione che converte i numeri dell'array da gradi Celsius a gradi Fahrenheit, arrotondando il risultato
function convertToFahrenheit(arrayOfNumbers) {
    // Crea un nuovo array vuoto in cui verranno aggiunti i valori convertiti
    const newArray = [];   
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Prende l'elemento corrente dell'array (assumiamo che sia un valore in gradi Celsius)
        const element = arrayOfNumbers[i];       
        // Converte il valore da Celsius a Fahrenheit utilizzando la formula:
        // Fahrenheit = (Celsius * 9/5) + 32
        // Poi arrotonda il risultato con Math.round() e lo aggiunge al nuovo array
        newArray.push(Math.round((element * (9 / 5)) + 32));
    }    
    // Restituisce il nuovo array con i valori convertiti in gradi Fahrenheit
    return newArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array1' (che presumibilmente contiene valori in gradi Celsius)
const arrayResult2 = convertToFahrenheit(array1);
// Stampa il risultato della conversione in Fahrenheit (valori arrotondati)
console.log('conversione arrotondata gradi fahrenheit', arrayResult2);


//esercizio 3: fare la media dei valori
// Funzione che calcola la media dei valori in un array, arrotondando il risultato a due decimali
function calculateMidValue(arrayOfNumbers) {
    // Variabile che accumula la somma dei valori dell'array
    let accumulator = 0;    
    // Ciclo attraverso tutti gli elementi dell'array per sommarli
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Prende l'elemento corrente dell'array
        const element = arrayOfNumbers[i];       
        // Aggiunge l'elemento alla variabile accumulator
        accumulator = accumulator + element;
    }    
    // Calcola la media dividendo la somma totale per la lunghezza dell'array
    let midValue = accumulator / arrayOfNumbers.length;   
    // Arrotonda il valore della media a due decimali
    midValue = Math.round(midValue * 100) / 100;   
    // Restituisce la media arrotondata
    return midValue;
}
// Esempio di utilizzo della funzione con un array chiamato 'array1'
const arrayResult3 = calculateMidValue(array1);
// Stampa il risultato della media dei valori dell'array
console.log('calcolo media', arrayResult3);


//esercizio 4: restituire il valore più basso e il più alto
// Funzione che trova il valore minimo e massimo in un array di numeri
function minMax(arrayOfNumbers) {
    // Crea un array vuoto in cui verranno aggiunti i valori minimi e massimi
    const arrayMinMax = [];   
    // L'operatore ... permette di passare gli elementi dell'array 
    // come argomenti separati, essenziale per l'uso di Math.min() e Math.max()
    // Trova il valore minimo nell'array usando Math.min() e l'operatore '...'
    let minNum = Math.min(...arrayOfNumbers);    
    // Trova il valore massimo nell'array usando Math.max() e l'operatore '...'
    let maxNum = Math.max(...arrayOfNumbers);    
    // Aggiunge i valori minimo e massimo all'array arrayMinMax
    arrayMinMax.push(minNum, maxNum);   
    // Restituisce l'array che contiene il valore minimo e massimo
    return arrayMinMax;
}
// Esempio di utilizzo della funzione con un array chiamato 'array1'
const arrayResult4 = minMax(array1);
// Stampa il risultato con il valore minimo e massimo dell'array
console.log('trova minimo e massimo', arrayResult4);


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri
// Funzione che filtra un array di stringhe, restituendo solo quelle con una lunghezza inferiore o uguale a 4 caratteri
function filterCharLenght4(arrayOfStrings) {
    // Crea un nuovo array vuoto in cui verranno aggiunti gli elementi che soddisfano la condizione
    let newArray = []; 
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Prende l'elemento corrente dell'array (una stringa)
        const element = arrayOfStrings[i];       
        // Se la lunghezza della stringa è minore o uguale a 4, aggiungila al nuovo array
        if (element.length <= 4) {
            newArray.push(element);
        }
    }  
    // Restituisce il nuovo array con le stringhe che hanno una lunghezza di 4 o meno caratteri
    return newArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene stringhe)
const arrayResult5 = filterCharLenght4(array2);
// Stampa il risultato, ovvero le stringhe con lunghezza inferiore o uguale a 4 caratteri
console.log('nomi più piccoli di 4 caratteri', arrayResult5);


//6) trasformare tutte le stringhe in maiuscolo
// Funzione che trasforma tutte le stringhe di un array in maiuscolo
function toUpperCase(arrayOfStrings) {
    // Crea un nuovo array vuoto in cui verranno aggiunti gli elementi trasformati in maiuscolo
    let newArray = [];    
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Prende l'elemento corrente dell'array e lo converte in maiuscolo con .toUpperCase()
        const upperString = arrayOfStrings[i].toUpperCase();       
        // Aggiunge la stringa trasformata al nuovo array
        newArray.push(upperString);
    }   
    // Restituisce il nuovo array con tutte le stringhe in maiuscolo
    return newArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene stringhe)
const arrayResult6 = toUpperCase(array2);
// Stampa il risultato, ovvero le stringhe dell'array trasformate in maiuscolo
console.log('trasformo in maiuscolo', arrayResult6);


//7) mettere SOLO le iniziali maiuscole
// Funzione che trasforma la prima lettera di ogni stringa in maiuscolo e il resto in minuscolo
function toUpperCaseFirstLetter(arrayOfStrings) {
    // Crea un nuovo array vuoto in cui verranno aggiunti gli elementi modificati
    let newArray = [];    
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Prende l'elemento corrente dell'array
        const element = arrayOfStrings[i];       
        // Modifica l'elemento: prima lettera in maiuscolo e il resto in minuscolo
        let elementModified = element[0].toUpperCase() + element.slice(1).toLowerCase();        
        // Aggiunge l'elemento modificato al nuovo array
        newArray.push(elementModified);
    }   
    // Restituisce il nuovo array con la prima lettera di ogni stringa in maiuscolo
    return newArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene stringhe)
const arrayResult7 = toUpperCaseFirstLetter(array2);
// Stampa il risultato, ovvero le stringhe con la prima lettera in maiuscolo
console.log('trasformo in maiuscolo la prima lettera', arrayResult7);


//8) restiture una stringa composta dalle iniziale delle parole
// Funzione che restituisce una stringa composta dalle iniziali di ogni parola in un array di stringhe
function getInitials(arrayOfStrings) {
    // Inizializza una variabile vuota in cui verranno accumulate le iniziali
    let initials = '';   
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Aggiunge la prima lettera di ogni stringa alla variabile 'initials'
        initials += arrayOfStrings[i][0];
    }   
    // Restituisce la stringa contenente tutte le iniziali
    return initials;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene parole o frasi)
const arrayResult8 = getInitials(array2);
// Stampa il risultato, ovvero la stringa formata dalle iniziali di ogni parola nell'array
console.log('stringa composta dalle iniziali delle parole', arrayResult8);


//9) contare tutti i caratteri di tutte le stringhe
// Funzione che conta il numero totale di caratteri in tutte le stringhe di un array
function countAllCharacters(arrayOfStrings) {
    // Inizializza una variabile che tiene traccia del totale dei caratteri
    let totalCharacters = 0;  
    // Ciclo attraverso tutti gli elementi dell'array fornito
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Aggiunge la lunghezza della stringa corrente al totale dei caratteri
        totalCharacters += arrayOfStrings[i].length;
    }    
    // Restituisce il numero totale di caratteri contati
    return totalCharacters;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene stringhe)
const arrayResult9 = countAllCharacters(array2);
// Stampa il risultato, ovvero il numero totale di caratteri nelle stringhe dell'array
console.log('numero totale di caratteri', arrayResult9);


//10) eliminare le vocali dalle stringhe
// Funzione che rimuove le vocali da ogni stringa di un array di stringhe
function removeVowels(arrayOfStrings) {
    // Stringa che contiene tutte le vocali maiuscole e minuscole
    const vowels = 'AEIOUaeiou';
    // Crea un nuovo array vuoto in cui verranno aggiunte le stringhe senza vocali
    let newArray = [];
    // Ciclo attraverso tutti gli elementi dell'array
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Prende l'elemento corrente dell'array
        let element = arrayOfStrings[i];
        // Inizializza una variabile vuota per la stringa senza vocali
        let elementWithoutVowels = '';
        // Ciclo attraverso ogni carattere della stringa
        for (let j = 0; j < element.length; j++) {
            // Se il carattere corrente non è una vocale (non presente nella stringa 'vowels')
            if (!vowels.includes(element[j])) {     //if (!vowels.includes(element[j].toLowerCase())) { posso confrontare direttamente in lower case ed utilizzare solo le minuscole nella costante vowels!! 
                // Aggiunge il carattere non vocale alla stringa senza vocali
                elementWithoutVowels += element[j];
            }
        }
        // Aggiunge la stringa senza vocali al nuovo array
        newArray.push(elementWithoutVowels);
    }
    // Restituisce l'array con tutte le stringhe senza vocali
    return newArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene stringhe)
const arrayResult10 = removeVowels(array2);
// Stampa il risultato, ovvero le stringhe senza vocali
console.log('stringhe senza vocali', arrayResult10);


//11) restituire un array di numeri che sono le lunghezze delle singole parole
// Funzione che restituisce un array contenente la lunghezza di ciascuna parola in un array di stringhe
function getWordLengths(arrayOfStrings) {
    // Crea un nuovo array vuoto in cui verranno aggiunte le lunghezze delle parole
    let lengthsArray = [];  
    // Ciclo attraverso tutti gli elementi dell'array di stringhe
    for (let i = 0; i < arrayOfStrings.length; i++) {
        // Aggiunge la lunghezza della stringa corrente all'array delle lunghezze
        lengthsArray.push(arrayOfStrings[i].length);
    }   
    // Restituisce l'array contenente la lunghezza di ciascuna parola
    return lengthsArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array2' (che contiene parole)
const arrayResult11 = getWordLengths(array2);
// Stampa il risultato, ovvero l'array con le lunghezze di ogni parola nell'array
console.log('array di lunghezze delle singole parole', arrayResult11);


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array
// Funzione che restituisce un array contenente la lunghezza di ciascun array all'interno di un array di array
function getArrayLengths(arrayOfArrays) {
    // Crea un nuovo array vuoto in cui verranno aggiunte le lunghezze dei singoli array
    let lengthsArray = [];    
    // Ciclo attraverso tutti gli array all'interno di 'arrayOfArrays'
    for (let i = 0; i < arrayOfArrays.length; i++) {
        // Aggiunge la lunghezza del singolo array corrente all'array 'lengthsArray'
        lengthsArray.push(arrayOfArrays[i].length);
    }   
    // Restituisce l'array contenente le lunghezze di ciascun array interno
    return lengthsArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array3' (che contiene altri array)
const arrayResult12 = getArrayLengths(array3);
// Stampa il risultato, ovvero l'array con le lunghezze di ogni array interno
console.log('array di lunghezze dei singoli array', arrayResult12);


//13) sommare tutti i numeri in tutti gli array
// Funzione che somma tutti i numeri presenti in un array di array
function sumAllNumbers(arrayOfArrays) {
    // Inizializza una variabile che conterrà la somma totale
    let totalSum = 0;    
    // Ciclo attraverso tutti gli array all'interno di 'arrayOfArrays'
    for (let i = 0; i < arrayOfArrays.length; i++) {
        // Ciclo attraverso ogni elemento di ogni array interno
        for (let j = 0; j < arrayOfArrays[i].length; j++) {
            // Aggiunge ogni numero all'accumulatore 'totalSum'
            totalSum += arrayOfArrays[i][j];
        }
    }   
    // Restituisce la somma totale di tutti i numeri
    return totalSum;
}
// Esempio di utilizzo della funzione con un array chiamato 'array3' (che contiene array di numeri)
const arrayResult13 = sumAllNumbers(array3);
// Stampa il risultato, ovvero la somma totale di tutti i numeri contenuti in tutti gli array
console.log('somma di tutti i numeri in tutti gli array', arrayResult13);


//14) sommare tutte le lunghezze degli array
// Funzione che somma tutte le lunghezze degli array all'interno di un array di array
function sumAllArrayLengths(arrayOfArrays) {
    // Inizializza una variabile che conterrà la somma totale delle lunghezze
    let totalLength = 0;   
    // Ciclo attraverso tutti gli array all'interno di 'arrayOfArrays'
    for (let i = 0; i < arrayOfArrays.length; i++) {
        // Aggiunge la lunghezza di ogni array interno alla variabile 'totalLength'
        totalLength += arrayOfArrays[i].length;
    }   
    // Restituisce la somma totale delle lunghezze
    return totalLength;
}
// Esempio di utilizzo della funzione con un array chiamato 'array3' (che contiene altri array)
const arrayResult14 = sumAllArrayLengths(array3);
// Stampa il risultato, ovvero la somma di tutte le lunghezze degli array
console.log('somma di tutte le lunghezze degli array', arrayResult14);


//15) sommare tutti i numeri con indice uguale e restituire un array di risultati
// Funzione che somma i numeri che si trovano allo stesso indice in array di array
function sumNumbersWithSameIndex(arrayOfArrays) {
    // Trova la lunghezza massima tra gli array interni
    let maxLength = 0;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].length > maxLength) {
            maxLength = arrayOfArrays[i].length;
        }
    }
    // Crea un array 'resultArray' della lunghezza massima, inizializzato a 0
    let resultArray = new Array(maxLength).fill(0);   
    // Somma i numeri che si trovano allo stesso indice in ogni array
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let j = 0; j < arrayOfArrays[i].length; j++) {
            resultArray[j] += arrayOfArrays[i][j];
        }
    }   
    // Restituisce l'array con la somma dei numeri con lo stesso indice
    return resultArray;
}
// Esempio di utilizzo della funzione con un array chiamato 'array3' (che contiene altri array di numeri)
const arrayResult15 = sumNumbersWithSameIndex(array3);
// Stampa il risultato, ovvero l'array con la somma dei numeri per ogni indice
console.log('somma di tutti i numeri con indice uguale', arrayResult15);