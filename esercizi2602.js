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
function isLongerThanFour(name) {
    return name.length > 4;
}
const result5_1 = array2.filter(isLongerThanFour);
console.log(result5_1);

const result5_2 = array2.filter(name => name.length > 4);
console.log(result5_2);

//6) trasformare tutte le stringhe in maiuscolo (M)
function toUpperCase(name) {
    return name.toUpperCase();
}
const result6_1 = array2.map(toUpperCase);
console.log(result6_1);

const result6_2 = array2.map(name => name.toUpperCase());
console.log(result6_2);

//7) mettere SOLO le iniziali maiuscole (M)
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
const result7_1 = array2.map(capitalizeFirstLetter);
console.log(result7_1);

const result7_2 = array2.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
console.log(result7_2);

//8) restiture una stringa composta dalle iniziale delle parole (R)
function getInitials(acc, name) {
    return acc + name.charAt(0).toUpperCase();
}
const result8_1 = array2.reduce(getInitials, '');
console.log(result8_1);

const result8_2 = array2.reduce((acc, name) => acc + name.charAt(0).toUpperCase(), '');
console.log(result8_2);

//9) contare tutti i caratteri di tutte le stringhe (R)
function countCharacters(acc, name) {
    return acc + name.length;
}
const result9_1 = array2.reduce(countCharacters, 0);
console.log(result9_1);

const result9_2 = array2.reduce((acc, name) => acc + name.length, 0);
console.log(result9_2);

//10) eliminare le vocali dalle stringhe (M)
function removeVowels(name) {
    return name.replace(/[aeiouAEIOU]/g, '');
}
const result10_1 = array2.map(removeVowels);
console.log(result10_1);

const result10_2 = array2.map(name => name.replace(/[aeiouAEIOU]/g, ''));
console.log(result10_2);

//11) restituire un array di numeri che sono le lunghezze delle singole parole (M)
function getLengths(name) {
    return name.length;
}
const result11_1 = array2.map(getLengths);
console.log(result11_1);

const result11_2 = array2.map(name => name.length);
console.log(result11_2);

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei singoli array (M)
function getArrayLengths(arr) {
    return arr.length;
}
const result12_1 = array3.map(getArrayLengths);
console.log(result12_1);

const result12_2 = array3.map(arr => arr.length);
console.log(result12_2);

//13) sommare tutti i numeri in tutti gli array (R)
function sumAllNumbers(acc, arr) {
    return acc + arr.reduce((sum, num) => sum + num, 0);
}
const result13_1 = array3.reduce(sumAllNumbers, 0);
console.log(result13_1);

const result13_2 = array3.reduce((acc, arr) => acc + arr.reduce((sum, num) => sum + num, 0), 0);
console.log(result13_2);

//14) sommare tutte le lunghezze degli array (R)
function sumAllLengths(acc, arr) {
    return acc + arr.length;
}
const result14_1 = array3.reduce(sumAllLengths, 0);
console.log(result14_1);

const result14_2 = array3.reduce((acc, arr) => acc + arr.length, 0);
console.log(result14_2);

//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (R)
function sumNumbersWithSameIndex(acc, arr) {
    for (let i = 0; i < arr.length; i++) {
        acc[i] = (acc[i] || 0) + arr[i];
    }
    return acc;
}
const result15_1 = array3.reduce(sumNumbersWithSameIndex, []);
console.log(result15_1);

const result15_2 = array3.reduce((acc, arr) => {
    for (let i = 0; i < arr.length; i++) {
        acc[i] = (acc[i] || 0) + arr[i];
    }
    return acc;
}, []);
console.log(result15_2);


const lorenzo = {
    name: "Lorenzo",
    surname: "Puppo",
    gender: "Male",
    marks: [7, 10, 7],
    yob: 1995,
    nationality: "Italy"
};

const jan = {
    name: "Jan",
    surname: "Stigliani",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 2000,
    nationality: "Italy"
};

const hugo = {
    name: "Hugo Alexander",
    surname: "Martinez Rivas",
    gender: "Female",
    marks: [9, 9, 10],
    yob: 1994,
    nationality: "El Salvador"
};

const jeremias = {
    name: "Jeremias Emmanuele",
    surname: "Cedeno Giler",
    gender: "Male",
    marks: [8, 9, 10],
    yob: 2003,
    nationality: "Ecuador"
};

const giovanni = {
    name: "Giovanni",
    surname: "Sussarellu",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 1981,
    nationality: "Italy"
};

const laura = {
    name: "Laura",
    surname: "Mazza",
    gender: "Female",
    marks: [8, 6, 7],
    yob: 1984,
    nationality: "Italy"
};

const eusebio = {
    name: "Eusebio",
    surname: "Veizi",
    gender: "Peanut",
    marks: [6, 6, 7],
    yob: 1993,
    nationality: "Albany"
};

const sara = {
    name: "Sara",
    surname: "De Prà",
    gender: "Fluid",
    marks: [8, 9, 10],
    yob: 1989,
    nationality: "Italy"
};

const hugo2 = {
    name: "Hugo Alexander",
    surname: "evil",
    gender: "Female",
    marks: [9, 9, 10],
    yob: 1994,
    nationality: "El Salvador"
};

const laura2 = {
    name: "Laura",
    surname: "Old",
    gender: "Female",
    marks: [8, 6, 7],
    yob: 1920,
    nationality: "Italy"
};

const allStudents = [lorenzo, jan, hugo, jeremias, giovanni, laura, eusebio, sara, hugo2, laura2];

console.log(allStudents);

function sortByAgeAndSurname(student1,student2) {
    const yob1 = student1.yob;
    const yob2 = student2.yob;
    if (yob1 === yob2) {
        const surname1 = student1.surname;
        const surname2 = student2.surname;

        return surname1.localeCompare(surname2);
    }
    return yob1-yob2;
}

allStudents.sort(sortByAgeAndSurname);

console.log(allStudents);