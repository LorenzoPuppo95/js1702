// gestione biblioteca
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toStringBook() {
        const bookStr = `Titolo: ${this.title}
Autore: ${this.author}
Codice ISBN: ${this.isbn}`
        return bookStr;
    }
}

class PhysicalBook extends Book {
    constructor(title, author, isbn, shelfLocation = 0) {
        super(title, author, isbn);
        this.shelfLocation = shelfLocation;
    }

    toString() {
        const physBookStr = `${super.toString()}
Scaffale: ${this.shelfLocation}`
        return physBookStr;
    }
}

class EBook extends Book {
    constructor(title, author, isbn, fileExtension) {
        super(title, author, isbn);
        this.fileExtension = fileExtension;
    }

    toString() {
        const eBookStr = `${super.toString()}
Formato: ${this.fileExtension}`
        return eBookStr;
    }
}

class User {
    static maxBorrowLimit = 3;
    constructor(name, id, borrowedBooks = []) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

    toStringUser() {
        const userStr = `Nome: ${this.name}
Id: ${this.id}
Libri in prestito: ${this.borrowedBooksNumber}`
        return userStr;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= User.maxBorrowLimit) {
            console.log("Hai raggiunto il limite massimo di libri in prestito");
            return;
        }

        if (book instanceof PhysicalBook && book.shelfLocation === 0) {
            console.log("Il libro non è disponibile");
            return;
        }

        this.borrowedBooks.push(book);
        console.log("Hai ritirato il libro");
        return;
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index >= 0) {
            this.borrowedBooks.splice(index, 1);
            console.log("Hai restituito il libro");
        } else {
            console.log("Il libro non è stato trovato tra i libri in prestito");
        }
    }

    get borrowedBooksNumber() {
        return this.borrowedBooks.length;
    }
}

class PremiumUser extends User {
    constructor(name, id, borrowedBooks) {
        super(name, id, borrowedBooks);
    }

    extendsMaxBorrowLimit(newLimit) {
        if (newLimit > 3){
            User.maxBorrowLimit = newLimit;
        }
    }
}

class Library {
    constructor(books=[], users=[]){
        this.books = books;
        this.users = users;
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(book){
        const index = this.books.indexOf(book);
        if (index >= 0) {
            this.books.splice(index, 1);
            console.log(`Hai rimosso il libro ${book.title} dalla libreria`);
        } else {
            console.log("Non hai trovato il libro, scemo!");
        }
    }

    isBookAvailable(isbn) {
        return this.books.some(book => book.isbn === isbn);
    }

    addUser(user){
        this.users.push(user);
    }

    removeUser(user){
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
            console.log(`Hai rimosso l'utente ${user.name} dalla lista`);
        } else {
            console.log("L'utente richiesto non esiste!");
        }
    }

    listBooks() {
        let listBooksString = "Elenco dei libri in biblioteca:\n";
        this.books.forEach((book, index) => {
            listBooksString += `${index + 1}) ${book.toStringBook()}\n`;
        });
        console.log(listBooksString);
    }

    listUsers() {
        let listUsersString = "Elenco dei utenti registrati:\n";
        this.users.forEach((user, index) => {
            listUsersString += `${index + 1}) ${user.toStringUser()}\n`;
        });
        console.log(listUsersString);
    }

    borrowBook(user, book){
        if(this.isBookAvailable){
            user.borrowBook(book);
            this.removeBook(book);
        } else {
            console.log('il libro non è disponibile!');
        }
    }

    returnBook(user, book){
        const index = user.borrowedBooks.indexOf(book);
        if(index >= 0){
            user.returnBook(book);
            this.addBook(book);
        } else {
            console.log("l'utente non ha il libro");
        }
    }
}

// Test the listBooks and listUsers methods
const book1 = new Book('Il Signore degli Anelli', 'J.R.R. Tolkien', 123456);
const book2 = new PhysicalBook('Harry Potter', 'J.K. Rowling', 654321, 5);
const book3 = new EBook('1984', 'George Orwell', 789012, '.epub');

const user1 = new User('Mario Rossi', 1);
const user2 = new PremiumUser('Luigi Bianchi', 2);

const library = new Library([book1, book2, book3], [user1, user2]);

library.listBooks();

library.listUsers();