const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//esercizio 1: filtrare tutti i numeri minori o uguali a 0
function removePositiveNumbers(arrayOfNumbers) {
    const newArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        if (element <= 0) {
            newArray.push(element);
        }
    }
    return newArray;
}
const arrayResult1 = removePositiveNumbers(array1);
console.log('array numeri negativi', arrayResult1);

//esercizio 2: convertire in gradi fahrenheit ipotizzando che l'unità di partenza sia celsius
function convertToFahrenheit(arrayOfNumbers) {
    const newArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        newArray.push(Math.round((element * (9 / 5)) + 32));
    }
    return newArray;
}
const arrayResult2 = convertToFahrenheit(array1);
console.log('conversione arrotondata gradi fahrenheit', arrayResult2);

//esercizio 3: fare la media dei valori
function calculateMidValue(arrayOfNumbers) {
    let accumulator = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        accumulator = accumulator + element;
    }
    let midValue = accumulator / arrayOfNumbers.length;
    midValue = Math.round(midValue * 100) / 100;
    return midValue;
}
const arrayResult3 = calculateMidValue(array1);
console.log('calcolo media', arrayResult3);

//esercizio 4: restituire il valore più basso e il più alto
function minMax(arrayOfNumbers) {
    const arrayMinMax = [];
    let minNum = Math.min(...arrayOfNumbers);
    let maxNum = Math.max(...arrayOfNumbers);
    arrayMinMax.push(minNum, maxNum);
    return arrayMinMax;
}
const arrayResult4 = minMax(array1);
console.log('trova minimo e massimo', arrayResult4);



const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri
function filterCharLenght4(arrayOfStrings) {
    let newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];
        if (element.length <= 4) {
            newArray.push(element);
        }
    }
    return newArray;
}
const arrayResult5 = filterCharLenght4(array2);
console.log('nomi più piccoli di 4 caratteri', arrayResult5);

//6) trasformare tutte le stringhe in maiuscolo
function toUpperCase(arrayOfStrings) {
    let newArray=[];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i].toUpperCase();
        newArray.push(element);
    }
    return newArray;
}
const arrayResult6 = toUpperCase(array2);
console.log('trasformo in maiuscolo', arrayResult6);

//7) mettere SOLO le iniziali maiuscole
function toUpperCaseFirstLetter(arrayOfStrings) {
    let newArray=[];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];
        for (let j = 0; j < 1; j++) {
            let elementModified = element[0].toUpperCase();
            newArray.push(elementModified);
        }      
    }
    return newArray;
}
const arrayResult7 = toUpperCaseFirstLetter(array2);
console.log('trasformo in maiuscolo la prima lettera', arrayResult7);


//8) restiture una stringa composta dalle iniziale delle parole
//9) contare tutti i caratteri di tutte le stringhe
//10) eliminare le vocali dalle stringhe
//11) restituire un array di numeri che sono le lunghezze delle singole parole


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array
//13) sommare tutti i numeri in tutti gli array
//14) sommare tutte le lunghezze degli array
//15) sommare tutti i numeri con indice uguale e restituire un array di risultati