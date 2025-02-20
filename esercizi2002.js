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
    let newArray = [];
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
    let newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];
        let elementModified = element[0].toUpperCase() + element.slice(1).toLowerCase();
        newArray.push(elementModified);
    }
    return newArray;
}
const arrayResult7 = toUpperCaseFirstLetter(array2);
console.log('trasformo in maiuscolo la prima lettera', arrayResult7);

//8) restiture una stringa composta dalle iniziale delle parole
function getInitials(arrayOfStrings) {
    let initials = '';
    for (let i = 0; i < arrayOfStrings.length; i++) {
        initials += arrayOfStrings[i][0];
    }
    return initials;
}
const arrayResult8 = getInitials(array2);
console.log('stringa composta dalle iniziali delle parole', arrayResult8);

//9) contare tutti i caratteri di tutte le stringhe
function countAllCharacters(arrayOfStrings) {
    let totalCharacters = 0;
    for (let i = 0; i < arrayOfStrings.length; i++) {
        totalCharacters += arrayOfStrings[i].length;
    }
    return totalCharacters;
}
const arrayResult9 = countAllCharacters(array2);
console.log('numero totale di caratteri', arrayResult9);

//10) eliminare le vocali dalle stringhe
function removeVowels(arrayOfStrings) {
    const vowels = 'AEIOUaeiou';
    let newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let element = arrayOfStrings[i];
        let elementWithoutVowels = '';
        for (let j = 0; j < element.length; j++) {
            if (!vowels.includes(element[j])) {
                elementWithoutVowels += element[j];
            }
        }
        newArray.push(elementWithoutVowels);
    }
    return newArray;
}
const arrayResult10 = removeVowels(array2);
console.log('stringhe senza vocali', arrayResult10);

//11) restituire un array di numeri che sono le lunghezze delle singole parole
function getWordLengths(arrayOfStrings) {
    let lengthsArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        lengthsArray.push(arrayOfStrings[i].length);
    }
    return lengthsArray;
}
const arrayResult11 = getWordLengths(array2);
console.log('array di lunghezze delle singole parole', arrayResult11);

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array
function getArrayLengths(arrayOfArrays) {
    let lengthsArray = [];
    for (let i = 0; i < arrayOfArrays.length; i++) {
        lengthsArray.push(arrayOfArrays[i].length);
    }
    return lengthsArray;
}
const arrayResult12 = getArrayLengths(array3);
console.log('array di lunghezze dei singoli array', arrayResult12);

//13) sommare tutti i numeri in tutti gli array
function sumAllNumbers(arrayOfArrays) {
    let totalSum = 0;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let j = 0; j < arrayOfArrays[i].length; j++) {
            totalSum += arrayOfArrays[i][j];
        }
    }
    return totalSum;
}
const arrayResult13 = sumAllNumbers(array3);
console.log('somma di tutti i numeri in tutti gli array', arrayResult13);

//14) sommare tutte le lunghezze degli array
function sumAllArrayLengths(arrayOfArrays) {
    let totalLength = 0;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        totalLength += arrayOfArrays[i].length;
    }
    return totalLength;
}
const arrayResult14 = sumAllArrayLengths(array3);
console.log('somma di tutte le lunghezze degli array', arrayResult14);

//15) sommare tutti i numeri con indice uguale e restituire un array di risultati
function sumNumbersWithSameIndex(arrayOfArrays) {
    let maxLength = 0;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].length > maxLength) {
            maxLength = arrayOfArrays[i].length;
        }
    }
    let resultArray = new Array(maxLength).fill(0);
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let j = 0; j < arrayOfArrays[i].length; j++) {
            resultArray[j] += arrayOfArrays[i][j];
        }
    }
    return resultArray;
}
const arrayResult15 = sumNumbersWithSameIndex(array3);
console.log('somma di tutti i numeri con indice uguale', arrayResult15);