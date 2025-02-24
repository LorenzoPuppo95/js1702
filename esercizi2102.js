//esercizio 1: create un oggetto studente per ogni partecipante al corso
//l'oggetto deve avere le seguenti keys:
//name, surname, gender, marks, yob, nationality,
// mettete tutti gli oggetti dentro un array
const student1 = {
    name: "Lorenzo",
    surname: "Puppo",
    gender: "Male",
    marks: [7, 10, 7],
    yob: 1995,
    nationality: "Italy"
};

const student2 = {
    name: "Jan",
    surname: "Stigliani",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 2000,
    nationality: "Italy"
};

const student3 = {
    name: "Hugo Alexander",
    surname: "Martinez Rivas",
    gender: "Female",
    marks: [9, 9, 10],
    yob: 1994,
    nationality: "El Salvador"
};

const student4 = {
    name: "Jeremias Emmanuele",
    surname: "Cedeno Giler",
    gender: "Male",
    marks: [8, 9, 10],
    yob: 2003,
    nationality: "Ecuador"
};

const student5 = {
    name: "Giovanni",
    surname: "Sussarellu",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 1981,
    nationality: "Italy"
};

const student6 = {
    name: "Laura",
    surname: "Mazza",
    gender: "Female",
    marks: [8, 6, 7],
    yob: 1984,
    nationality: "Italy"
};

const student7 = {
    name: "Eusebio",
    surname: "Veizi",
    gender: "Peanut",
    marks: [6, 6, 7],
    yob: 1993,
    nationality: "Albany"
};

const student8 = {
    name: "Sara",
    surname: "De Prà",
    gender: "Fluid",
    marks: [8, 9, 10],
    yob: 1989,
    nationality: "Italy"
};

const students = [student1, student2, student3, student4, student5, student6, student7, student8];

//esercizio 2: scrivete una funzione che restituisca l'età media degli studenti
function averageAge(students) {
    const currentYear = 2025;
    let totalAge = 0;
    // Calcola l'età di ogni studente e somma le età
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        totalAge += (currentYear - student.yob);
    }
    // Calcola la media delle età
    const averageAge = totalAge / students.length;
    // Arrotonda la media a due decimali
    return Math.round(averageAge * 10) / 10;
}
const averageAgeValue = averageAge(students);
// Stampa l'età media degli studenti
console.log(averageAgeValue);

//esercizio 3: scrivete una funzione che restituisca un array di stringhe
//ogni stringa dovrà avere questo formato "nome/cognome"
function getNameSurnameArray(students) {
    let nameSurnameArray = [];
    // Itera attraverso tutti gli studenti e crea una stringa "nome/cognome" per ciascuno
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        nameSurnameArray.push(`${student.name}/${student.surname}`);
    }
    // Restituisce l'array di stringhe "nome/cognome"
    return nameSurnameArray;
}
const nameSurnameArray = getNameSurnameArray(students);
// Stampa l'array di stringhe "nome/cognome"
console.log(nameSurnameArray);

//esercizio 4: scrivete una funzione che restituisca la somma dei maschi, delle femmine e degli eventuali altri gender
function countGenders(students) {
    const genderCounts = {};
    // Itera attraverso tutti gli studenti e conta i generi
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const gender = student.gender;
        if (genderCounts[gender]) {
            genderCounts[gender]++;
        } else {
            genderCounts[gender] = 1;
        }
    }
    // Restituisce un oggetto con il conteggio dei generi
    return genderCounts;
}
const genderCounts = countGenders(students);
// Stampa la somma dei maschi, delle femmine e degli eventuali altri gender
console.log('somma dei maschi, delle femmine e degli eventuali altri gender', genderCounts);

//esercizio 5: scrivete una funzione che restituisca la media delle medie voti degli studenti
function averageOfAverages(students) {
    let totalAverage = 0;
    let individualAverages = [];
    // Itera attraverso tutti gli studenti e calcola la media dei voti per ciascuno
    for (let i = 0; i < students.length; i++) {
        // Ottiene lo studente corrente
        const student = students[i];
        // Ottiene i voti dello studente corrente
        const marks = student.marks;
        // Calcola la somma dei voti utilizzando il metodo reduce
        const sumOfMarks = marks.reduce((acc, mark) => acc + mark, 0);
        // Calcola la media dei voti
        const averageMarks = sumOfMarks / marks.length;
        // Arrotonda la media a una cifra decimale e la aggiunge all'array individualAverages
        individualAverages.push(Math.round(averageMarks * 10) / 10);
        // Aggiunge la media dei voti al totalAverage
        totalAverage += averageMarks;
    }
    // Calcola la media delle medie voti degli studenti
    const overallAverage = totalAverage / students.length;
    // Restituisce un oggetto con la media delle medie voti e le medie individuali
    return {
        overallAverage: Math.round(overallAverage * 10) / 10,
        individualAverages: individualAverages
    };
}
const averageOfAveragesResult = averageOfAverages(students);
// Stampa la media delle medie voti degli studenti
console.log('media delle medie voti degli studenti', averageOfAveragesResult.overallAverage);
// Stampa la media di ciascuno studente
console.log('media di ciascuno studente', averageOfAveragesResult.individualAverages);

//esercizio 6: scrivete una funzione che restituisca un oggetto così strutturato:
//{nationality1{student1Name, student2Name...}, nationality2{student1Name, student2Name...}}
function groupByNationality(students) {
    const nationalityGroups = {};
    // Itera attraverso tutti gli studenti e raggruppa i nomi per nazionalità
    for (const student of students) {
        const nationality = student.nationality;
        const name = student.name;
        if (nationalityGroups[nationality]) {
            nationalityGroups[nationality].push(name);
        } else {
            nationalityGroups[nationality] = [name];
        }
    }
    // Restituisce un oggetto con i gruppi di nazionalità
    return nationalityGroups;
}
const groupedByNationality = groupByNationality(students);
// Stampa l'oggetto raggruppato per nazionalità
console.log(groupedByNationality);


// esercizio 7: replica https://jessbayer.com  