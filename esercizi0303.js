//aggiungere al to string di tutte le classi gender e nationality

//aggiungere a teacher le funzioni: bestStudent e studentsMean

//aggiungere la classe principal che erediterà da human e come caratterisriche avrà
// un array di teachers
// il nome della scuola

//aggiungere al principal due funzioni : bestTeacher e bestStudent

class Human {
    #yob;
    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.#yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }

    // getter yob
    get yob() {
        return this.#yob;
    }
    // setter yob
    set yob(value) {
        const now = new Date();
        const year = now.getFullYear();
        if (value > year) {
            console.log("errore, hai inserito una data futura")
        } else if (value < (year - 150)) {
            console.log("errore, non accettiamo vampiri")
        } else {
            this.#yob = value;
        }
    }

    #getAge() {
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.#yob;
        return age;
    }

    toString() {
        const humanStr = `Nome: ${this.name}
Cognome: ${this.surname}
Età: ${this.#getAge()}
Nazionalità: ${this.nationality}
Genere: ${this.gender}`
        return humanStr;
    }
}

class Student extends Human {
    #marks;
    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender);
        this.#marks = marks;
    }

    get marks() {
        return this.#marks;
    }

    set marks(value) {
        return this.#marks = value;
    }
    // get mean(){
    //     if (this.marks.length === 0) {
    //         return -1;
    //     }
    //     let sumOfMarks = 0;
    //     for (let i = 0; i < this.marks.length; i++) {
    //         const mark = this.marks[i];
    //         sumOfMarks += mark;
    //     }
    //     const mean = sumOfMarks / this.marks.length;
    //     return mean;
    // }
    calculateMean() {
        if (this.#marks.length === 0) {
            return -1;
        }
        let sumOfMarks = 0;
        for (let i = 0; i < this.#marks.length; i++) {
            const mark = this.#marks[i];
            sumOfMarks += mark;
        }
        const mean = sumOfMarks / this.#marks.length;
        return mean;
    }

    toString() {
        const studentStr = `${super.toString()}
Media: ${this.calculateMean()}`
        return studentStr;
    }

    compareTo(otherStudent) {
        const name1 = this.name;
        const name2 = otherStudent.name;
        if (name1 === name2) {
            const yob1 = this.yob;
            const yob2 = otherStudent.yob;
            return yob1 - yob2;
        }
        return name1.localeCompare(name2);
    }

    addMark(mark) {
        this.#marks.push(mark);
    }

    getBestMark() {
        return Math.max(...this.#marks) >= 0 ? Math.max(...this.#marks) : -1;
    }
}

class Teacher extends Human {
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender);
        this.subject = subject;
        this.students = students;
    }

    toString() {
        const teacherStr = `${super.toString()}
Materia: ${this.subject}
Numero di studenti: ${this.students.length}`
        return teacherStr;
    }

    getBestStudent() {
        if (this.students.length === 0) {
            return -1;
        }
        let bestStudent = this.students[0];
        for (let i = 1; i < this.students.length; i++) {
            if (this.students[i].calculateMean() > bestStudent.calculateMean()) {
                bestStudent = this.students[i];
            }
        }
        return bestStudent;
    }

    studentsMean() {
        if (this.students.length === 0) {
            return -1;
        }
        let totalMean = 0;
        for (let i = 0; i < this.students.length; i++) {
            totalMean += this.students[i].calculateMean();
        }
        return totalMean / this.students.length;
    }
}

class Principal extends Human {
    constructor(name, surname, yob, nationality, gender, school, teachers = []) {
        super(name, surname, yob, nationality, gender);
        this.school = school;
        this.teachers = teachers;
    }

    getBestTeacher() {
        if (this.teachers.length === 0) {
            return null;
        }
        let bestTeacher = this.teachers[0];
        for (let i = 1; i < this.teachers.length; i++) {
            if (this.teachers[i].studentsMean() > bestTeacher.studentsMean()) {
                bestTeacher = this.teachers[i];
            }
        }
        return bestTeacher;
    }

    getBestStudent() {
        let bestStudent = null;
        for (let i = 0; i < this.teachers.length; i++) {
            const teacherBestStudent = this.teachers[i].getBestStudent();
            if (teacherBestStudent && (!bestStudent || teacherBestStudent.calculateMean() > bestStudent.calculateMean())) {
                bestStudent = teacherBestStudent;
            }
        }
        return bestStudent;
    }
}

const student1 = new Student('laura', 'mazza', 1984, 'it', 'female', [7, 8]);
const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'male', [6, 6.5]);
const studentsAndrea = [student1, student2];
const student3 = new Student('sara', 'de pra', 1989, 'it', 'female', [7.5, 8]);
const student4 = new Student('jeremias', 'cedeno', 2003, 'ec', 'male', [6, 8.5]);
const studentsDevil = [student3, student4];
const student5 = new Student('jan', 'stigliani', 2000, 'it', 'male', [9, 3]);
const student6 = new Student('lorenzo', 'puppo', 1995, 'it', 'male', [7, 8.5]);
const studentsAngel = [student5, student6];
const teacher1 = new Teacher('andrea', 'asioli', 1978, 'it', 'male', 'CS', studentsAndrea);
const teacher2 = new Teacher('andrea', 'devil', 1978, 'it', 'male', 'CS', studentsDevil);
const teacher3 = new Teacher('andrea', 'angel', 1978, 'it', 'male', 'CS', studentsAngel);
const teachers = [teacher1, teacher2, teacher3];
const principal = new Principal('pippo', 'pippis', 1959, 'it', 'male', 'media Stipippi', teachers);

console.log(teacher1.getBestStudent());
console.log(teacher2.getBestStudent());
console.log(teacher3.getBestStudent());
console.log(teacher1.studentsMean());
console.log(teacher2.studentsMean());
console.log(teacher3.studentsMean());
console.log(principal);
console.log(principal.getBestTeacher());
console.log(principal.getBestStudent());

//1)Crea una classe base ContoBancario:
//-La classe ContoBancario deve avere le seguenti proprietà: titolare (Human) saldo (numero)
//-La classe ContoBancario deve avere i seguenti metodi:
//-toString()
//-deposita(importo): Aggiunge l'importo al saldo.
//-preleva(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti, altrimenti stampa un messaggio di errore.

class ContoBancario {
    constructor(titolare, saldo) {
        this.titolare = titolare;
        this.saldo = saldo;
    }

    toString() {
        return `${this.titolare.toString()}
Saldo: ${this.saldo}`;
    }

    deposita(importo) {
        this.saldo += importo;
    }

    preleva(importo) {
        if (this.saldo >= importo) {
            return this.saldo -= importo;
        } else {
            const errStr = 'Errore: fondi insufficienti';
            console.log(errStr);
        }
    }
}

//2)Crea una classe derivata ContoCorrente che eredita da ContoBancario:
//-La classe ContoCorrente deve avere le seguenti proprietà aggiuntive:
//-limiteSpesa (numero)
//-La classe ContoCorrente deve avere i seguenti metodi aggiuntivi:
//-paga(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti o se l'importo è entro il limite di spesa, altrimenti stampa un messaggio di errore.
// se il pagamento va a buon fine il metodo aggiunge al saldo il 2% dell'importo

class ContoCorrente extends ContoBancario {
    constructor(titolare, saldo, limiteSpesa) {
        super(titolare, saldo);
        this.limiteSpesa = limiteSpesa;
    }

    paga(importo) {
        if (this.saldo >= importo && this.limiteSpesa >= importo) {
            this.saldo -= importo;
            this.saldo += importo * 0.02;
            return this.saldo;
        } else {
            const errStr = 'Errore: fondi insufficienti o importo oltre il limite di spesa.';
            console.log(errStr);
        }
    }
}

//3)Crea una classe derivata ContoRisparmio che eredita da ContoBancario:
//-La classe ContoRisparmio deve avere le seguenti proprietà aggiuntive:
//-sogliaBonus(numero)
//-La classe ContoRisparmio deve avere i seguenti metodi aggiuntivi:
//-applicaBonus(): Aggiunge un bonus del 2% (del saldo) al saldo se il saldo supera la soglia.

class ContoRisparmio extends ContoBancario {
    constructor(titolare, saldo, sogliaBonus) {
        super(titolare, saldo);
        this.sogliaBonus = sogliaBonus;
    }

    applicaBonus() {
        if (this.saldo > this.sogliaBonus) {
            return this.saldo += this.saldo * 0.02;
        }
    }
}

const human1 = new Human('Scrooge', 'mcDuck', 1947, 'Scottish', 'Male');
const contoBancario = new ContoBancario(human1, 65000000000);
console.log(contoBancario.toString());
contoBancario.deposita(500);
console.log(contoBancario.toString());
contoBancario.preleva(200);
console.log(contoBancario.toString());
contoBancario.preleva(650000000001500);

const contoCorrente = new ContoCorrente(human1, 65000000000, 500);
console.log(contoCorrente.toString());
contoCorrente.paga(300);
console.log(contoCorrente.toString());
contoCorrente.paga(700);

const contoRisparmio = new ContoRisparmio(human1, 65000000000, 800);
console.log(contoRisparmio.toString());
contoRisparmio.applicaBonus();
console.log(contoRisparmio.toString());


// console.log(student3.getAge());
console.log(student3.yob);
student3.yob = 2050;
console.log(student3.yob);
student3.yob = 1050;
console.log(student3.yob);
student3.yob = 1950;
console.log(student3.yob);



console.log(Math.cos(Math.PI));

class Circle {
    static PI = Math.PI;
    constructor(centerX, centerY, r) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.r = r;
    }
    get diameter() {
        return this.r * 2;
    }
    calculateCircumference() {
        return 2 * Circle.PI * this.r;
    }
    calculateArea() {
        return (this.r ** 2) * Circle.PI;
    }
}
const circle1 = new Circle(0, 0, 10);
console.log(circle1.diameter);
console.log(circle1.calculateCircumference());

const circle2 = new Circle(0, 0, 20);
console.log(circle2.diameter);
console.log(circle2.calculateCircumference());

console.log(Circle.PI);

console.log(circle1.calculateArea());
console.log(circle2.calculateArea());

/* The Math2 class provides static methods for performing mathematical operations such as addition,
absolute value, squaring, and cubing. */
class Math2 {
    /**
     * The function "sum" takes two numbers as input and returns their sum.
     * @param {number} n1 - The parameter `n1` is the first number that will be used in the `sum` function to
     * perform addition with another number.
     * @param {number} n2 - The `n2` parameter is the second number that will be added to `n1` in the `sum`
     * function.
     * @returns {number} The `sum` function is returning the sum of the two input parameters `n1` and `n2`.
     */
    static sum(n1, n2) {
        return n1 + n2;
    }
    /**
     * The static absolute function returns the absolute value of a given number.
     * @param {number} n - The parameter `n` in the `absolute` function represents a number whose absolute value
     * needs to be calculated. The function returns the absolute value of the input number `n`, which
     * is the non-negative value of `n` regardless of its sign.
     * @returns {number} The absolute value of the input number `n` is being returned. If `n` is negative, its
     * negation is returned, otherwise `n` itself is returned.
     */
    static absolute(n) {
        return n < 0 ? -n : n;
    }
    /**
     * The static function "square" returns the square of a given number.
     * @param {number} n - The parameter `n` in the `square` function represents the number that you want to
     * square. When you call the `square` function and pass a number as an argument, the function will
     * return the square of that number by multiplying it by itself.
     * @returns {number} The `square` function is returning the square of the input number `n`. It calculates `n
     * * n` and returns the result.
     */
    static square(n) {
        return n * n;
    }
    /**
     * The static cube function calculates the cube of a given number.
     * @param {number} n - The parameter `n` represents the number that you want to calculate the cube of.
     * @returns {number} The cube of the input number `n` is being returned.
     */
    static cube(n) {
        return n * n * n;
    }
}

console.log(Math2.cube(5));

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "?";
    }
    sayName() {
        return `I'm ${this.name}`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return "bau";
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return "miao";
    }
}

const cat1 = new Cat("laura");
const cat2 = new Cat("lorenzo");
const dog1 = new Dog("giovanni");
const dog2 = new Dog("jan");
const cat3 = new Cat("hugo");
const cat4 = new Cat("eusebio");
const cat5 = new Cat("jeremias");
const dog3 = new Dog("andrea");
const animals = [cat1, cat2, dog1, dog2, cat3, cat4, cat5, dog3];

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal.sayName(), animal.speak());
}