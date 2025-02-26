const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//esercizio 1: filtrare tutti i numeri minori o uguali a 0 (F)
function isSmaller(number) {
    if (number <= 0) {
        return true;
    }
}
const result1_1 = array1.filter(isSmaller);
console.log(result1_1);

const result1_2 = array1.filter(numb => numb <= 0);
console.log(result1_2);

//esercizio 2: convertire in gradi fahrenheit ipotizzando che l'unità di partenza sia celsius (M)
function convertToFahr(number) {
    return convDegrees = Math.round(number * (9 / 5) + 32);
}
const result2_1 = array1.map(convertToFahr);
console.log(result2_1);

const result2_2 = array1.map(num => Math.round(num * (9 / 5) + 32));
console.log(result2_2);

//esercizio 3: fare la media dei valori (R)
function sumNumbers(acc, curr) {
    return newAcc = acc + curr;
}
const result3_1 = Math.round((array1.reduce(sumNumbers, 0) / array1.length) * 100) / 100; 
console.log(result3_1);

const result3_2 = Math.round((array1.reduce((acc, numb) => acc += numb) / array1.length) * 100) / 100;
console.log(result3_2);

//esercizio 4: restituire il valore più basso e il più alto (R)
function getMinMax(acc, curr){
    acc.min = Math.min(acc.min, curr); 
    acc.max = Math.max(acc.max, curr);
    return acc;
}
const result4_1 = array1.reduce(getMinMax, {min: Infinity, max:-Infinity});
console.log(result4_1);

const result4_2 = array1.reduce((acc, current) => { 
    acc.min = Math.min(acc.min, current); 
    acc.max = Math.max(acc.max, current);
    return acc;
}, { min: Infinity, max: -Infinity });
console.log(result4_2);

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri (F)

//6) trasformare tutte le stringhe in maiuscolo (M)

//7) mettere SOLO le iniziali maiuscole (M)

//8) restiture una stringa composta dalle iniziale delle parole (R)

//9) contare tutti i caratteri di tutte le stringhe (R)

//10) eliminare le vocali dalle stringhe (M)

//11) restituire un array di numeri che sono le lunghezze delle singole parole (M)

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array (M)

//13) sommare tutti i numeri in tutti gli array (R)

//14) sommare tutte le lunghezze degli array (R)

//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (R)