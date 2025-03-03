//aggiungere al to string di tutte le classi gender e nationality

//aggiungere a teacher le funzioni: bestStudent e studentsMean

//aggiungere la classe principal che erediterà da human e come caratterisriche avrà
// un array di teachers
// il nome della scuola

//aggiungere al principal due funzioni : bestTeacher e bestStudent

class Human {
    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }

    getAge() {
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }

    toString() {
        const humanStr = `Nome: ${this.name}
Cognome: ${this.surname}
Età: ${this.getAge()}
Nazionalità: ${this.nationality}
Genere: ${this.gender}`
        return humanStr;
    }
}

class Student extends Human {
    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender);
        this.marks = marks;
    }

    calculateMean() {
        if (this.marks.length === 0) {
            return -1;
        }
        let sumOfMarks = 0;
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            sumOfMarks += mark;
        }
        const mean = sumOfMarks / this.marks.length;
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
        this.marks.push(mark);
    }

    getBestMark() {
        return Math.max(...this.marks) >= 0 ? Math.max(...this.marks) : -1;
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
    constructor(name, surname, yob, nationality, gender, subject, school, teachers = []) {
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