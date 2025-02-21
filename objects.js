// Creazione di un oggetto vuoto
const emptyObj = {};

// Creazione di un oggetto 'student' con varie proprietà e un metodo
const student = {
    name: "andrea", // Nome dello studente
    surname: "asioli", // Cognome dello studente
    yob: 1978, // Anno di nascita dello studente
    marks: [9, 10, 8], // Voti dello studente
    address: { // Indirizzo dello studente
        street: "via canneto il curto", // Via
        streetNumber: 12, // Numero civico
        cap: 16123 // CAP
    },
    "is Married": false, // Stato civile dello studente
    // Metodo per calcolare la media dei voti
    marksMean: () => student.marks.reduce((a, c) => { a = a + c; return a; }, 0) / student.marks.length
}

// Stampa l'oggetto 'student'
console.log(student);
// Stampa il nome dello studente
console.log(student.name);
// Stampa il cognome dello studente
console.log(student["surname"]);
// Stampa lo stato civile dello studente
console.log(student["is Married"]);
// Stampa la via dell'indirizzo dello studente
console.log(student.address.street);
// Stampa il primo voto dello studente
console.log(student.marks[0]);

// Creazione di un oggetto 'startingObject' e aggiunta di proprietà
const startingObject = {};
console.log(startingObject); // Stampa l'oggetto vuoto
startingObject.name = "starting Object"; // Aggiunge la proprietà 'name'
startingObject.creationDate = "21/02/2025"; // Aggiunge la proprietà 'creationDate'
console.log(startingObject); // Stampa l'oggetto con le nuove proprietà

// Creazione di un oggetto 'book1' con varie proprietà
const book1 = {
    title: "eloquent js", // Titolo del libro
    author: "Marijn Haverbeke", // Autore del libro
    edition: 4, // Edizione del libro
    yop: 2024, // Anno di pubblicazione del libro
    isAvailable: true // Disponibilità del libro
}

// Ciclo for-in per iterare sulle proprietà dell'oggetto 'book1'
for (const key in book1) {
    // Verifica se l'oggetto 'book1' ha la proprietà 'key' come propria (non ereditata)
    if (Object.prototype.hasOwnProperty.call(book1, key)) {
        const value = book1[key]; // Ottiene il valore associato alla chiave 'key'
        console.log(`Il valore associato alla chiave ${key} è ${value}`); // Stampa la chiave e il valore
    }
}

// Ottiene un array delle chiavi dell'oggetto 'book1'
const arrayOfKeys = Object.keys(book1);
console.log(arrayOfKeys); // Stampa l'array delle chiavi

// Ciclo for per iterare sulle chiavi dell'oggetto 'book1'
for (let i = 0; i < Object.keys(book1).length; i++) {
    const key = Object.keys(book1)[i]; // Ottiene la chiave corrente
    const value = book1[key]; // Ottiene il valore associato alla chiave corrente
    console.log(`Il valore associato alla chiave ${key} è ${value}`); // Stampa la chiave e il valore
}

// Ottiene un array dei valori dell'oggetto 'book1'
const arrayOfValues = Object.values(book1);
console.log(arrayOfValues); // Stampa l'array dei valori

// Ottiene un array di coppie [chiave, valore] dell'oggetto 'book1'
const arrayOfEntries = Object.entries(book1);
console.log(arrayOfEntries); // Stampa l'array delle coppie [chiave, valore]

// Modifica le proprietà dell'oggetto 'book1'
book1.title = "Stocazzo"; // Cambia il titolo del libro
book1.author = "Io"; // Cambia l'autore del libro

// Congela l'oggetto 'book1' per renderlo immutabile
Object.freeze(book1);

// Tentativo di modificare le proprietà dell'oggetto 'book1' dopo averlo congelato
book1.title = "Odissea"; // Non avrà effetto perché l'oggetto è congelato
book1.author = "Omero"; // Non avrà effetto perché l'oggetto è congelato

// Stampa l'oggetto 'book1' per mostrare che le modifiche non sono state applicate
console.log(book1);

// Creazione di un oggetto 'student2' con varie proprietà
const student2 = {
    name: "andrea", // Nome dello studente
    surname: "asioli", // Cognome dello studente
    yob: 1978, // Anno di nascita dello studente
    marks: [9, 10, 8], // Voti dello studente
    address: { // Indirizzo dello studente
        street: "via canneto il curto", // Via
        streetNumber: 12, // Numero civico
        cap: 16123 // CAP
    }
}

// Stampa l'oggetto 'student2'
console.log(student2);

// Stampa l'oggetto 'student2' per mostrare che le modifiche sono state applicate
// Utilizza JSON.stringify per convertire l'oggetto in una stringa JSON
console.table(JSON.stringify(student2));
// Stampa l'oggetto 'student2' direttamente
console.log(student2);

// Stampa l'oggetto 'student2' per mostrare che le modifiche sono state applicate
console.table(JSON.stringify(student2));
console.log(student2);

// Assegna l'oggetto 'student2' a una nuova variabile 'student3'
const student3 = student2;

// Modifica il cognome dello studente tramite 'student3'
student3.surname = "awuewue"; // Questo avrà effetto perché 'student2' non è congelato

// Stampa l'oggetto 'student2' per mostrare che le modifiche tramite 'student3' sono state applicate
// Utilizza JSON.stringify per convertire l'oggetto in una stringa JSON
console.table(JSON.stringify(student2));
// Stampa l'oggetto 'student2' direttamente
console.log(student2);

// Creazione di una stringa JSON che rappresenta un oggetto 'student2'
const student2String = '{"name":"aasasasas","surname":"awuewue","yob":4433,"marks":[9,10,8],"address":{"street":"via canneto il curto","streetNumber":12,"cap":16123}}';

// Parsing della stringa JSON per creare un nuovo oggetto 'student4'
const student4 = JSON.parse(student2String);

// Stampa l'oggetto 'student4' per mostrare che è stato creato correttamente dal JSON
console.log(student4);

// Stampa il cognome dello studente 'student4'
console.log(student4.surname);