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
function etaMedia(students) {
    const currentYear = 2025;
    let totalAge = 0;
    // Calcola l'età di ogni studente e somma le età
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const age = currentYear - student.yob;
        totalAge += age;
    }
    // Calcola la media delle età
    const averageAge = totalAge / students.length;
    // Arrotonda la media a due decimali
    return Math.round(averageAge * 10) / 10;
}
const etaMediaValue = etaMedia(students);
console.log(etaMediaValue);

//esercizio 3: scrivete una funzione che restituisca un array di stringhe
//ogni stringa dovrà avere questo formato "nome/cognome"


//esercizio 4: scrivete una funzione che restituisca la somma dei maschi e delle femmine

//esercizio 5: scrivete una funzione che restutisca la media delle medie degli studenti

//esercizio 6: scrivete una funzione che restituisca un oggetto così sturtturato:
//{nationality1{student1Name, student2Name...}, nationality2{student1Name, student2Name...}}

// esercizio 7: replica https://jessbayer.com