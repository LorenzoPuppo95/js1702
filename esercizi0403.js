// #region books
class Book {
    static isbnSet = new Set();

    constructor(title, author, isbn) {
        if (!Number.isInteger(isbn)) {
            throw new Error("ISBN deve essere un valore numerico intero.");
        }
        if (Book.isbnSet.has(isbn)) {
            throw new Error(`Esiste già un libro con il codice ISBN ${isbn}`);
        }
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.flagBorrowed = false;
        Book.isbnSet.add(isbn);
    }

    toStringBook() {
        const bookStr = `Titolo: ${this.title}
Autore: ${this.author}
Codice ISBN: ${this.isbn}
In prestito: ${this.flagBorrowed ? 'Sì' : 'No'}`;
        return bookStr;
    }
}

class PhysicalBook extends Book {
    #shelfLocation;
    constructor(title, author, isbn, shelfLocation = 0) {
        super(title, author, isbn);
        this.#shelfLocation = shelfLocation;
    }

    get shelfLocation() {
        return this.#shelfLocation;
    }

    set shelfLocation(value) {
        if (!Number.isInteger(value) || value <= 1) {
            throw new Error("shelfLocation deve essere un valore numerico intero maggiore di 1.");
        }
        this.#shelfLocation = value;
    }

    toStringBook() {
        const physBookStr = `${super.toStringBook()}
Scaffale: ${this.shelfLocation}`;
        return physBookStr;
    }
}

/**
 * Class representing an EBook.
 * @extends Book
 */
class EBook extends Book {
    static validExtensions = ['ePub', 'mobi', 'pdf'];
    #fileExtension;

    /**
     * The function is a constructor that initializes a new object with properties for title, author,
     * ISBN, and file extension.
     * @param title - Title is a string that represents the title of a book or document.
     * @param author - The `author` parameter in the constructor function is typically used to specify
     * the author of a book or any other written work. It is a piece of information that helps identify
     * the creator or originator of the content.
     * @param isbn - International Standard Book Number (ISBN) is a unique identifier for books. It is
     * typically a 10 or 13-digit number used to identify a specific edition of a book.
     * @param fileExtension - The `fileExtension` parameter in the constructor is used to specify the
     * file extension of the file associated with the book. Consentiti come valori ePub, mobi, pdf.
     */
    constructor(title, author, isbn, fileExtension) {
        super(title, author, isbn);
        this.fileExtension = fileExtension;
    }

    get fileExtension() {
        return this.#fileExtension;
    }

    set fileExtension(value) {
        if (!EBook.validExtensions.includes(value)) {
            throw new Error(`Formato non valido. Le estensioni accettate sono: ${EBook.validExtensions.join(', ')}`);
        }
        this.#fileExtension = value;
    }

    toStringBook() {
        const eBookStr = `${super.toStringBook()}
Formato: ${this.fileExtension}`;
        return eBookStr;
    }
}
// #endregion
// #region user
class User {
    static maxBorrowLimit = 3;
    static currentId = 1;

    constructor(name, borrowedBooks = []) {
        this.id = User.currentId++;
        this.name = name;        
        this.borrowedBooks = borrowedBooks;
    }

    toStringUser() {
        const userStr = `Id: ${this.id}
Nome: ${this.name}
Libri in prestito: ${this.borrowedBooksNumber}
Limite: ${User.maxBorrowLimit}`;
        return userStr;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= User.maxBorrowLimit) {
            console.log(`L'utente ${this.name} ha raggiunto il limite massimo di libri in prestito`);
            return;
        }

        if (book.flagBorrowed) {
            console.log("Il libro richiesto non è disponibile");
            return;
        }

        this.borrowedBooks.push(book);
        console.log(`L'utente ${this.name} ha ritirato il libro ${book.title}`);
        return;
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index >= 0) {
            this.borrowedBooks.splice(index, 1);
            console.log(`Hai restituito il libro ${book.title}`);
        } else {
            console.log("Il libro non è stato trovato tra i libri in prestito");
        }
    }

    get borrowedBooksNumber() {
        return this.borrowedBooks.length;
    }
}

class PremiumUser extends User {
    constructor(name, borrowedBooks = []) {
        super(name, borrowedBooks);
        this.maxBorrowLimit = User.maxBorrowLimit; // Initialize with the default max borrow limit
    }

    extendsMaxBorrowLimit(newLimit) {
        if (newLimit >= User.maxBorrowLimit) {
            this.maxBorrowLimit = newLimit;
            console.log(`Hai aggiornato a ${this.maxBorrowLimit} il limite di libri massimi in prestito per ${this.name}`);
        } else {
            console.log(`Il nuovo limite deve essere maggiore o uguale a ${User.maxBorrowLimit}`);
        }
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= this.maxBorrowLimit) {
            console.log(`L'utente ${this.name} ha raggiunto il limite massimo di libri in prestito`);
            return;
        }

        if (book.flagBorrowed) {
            console.log("Il libro richiesto non è disponibile");
            return;
        }

        this.borrowedBooks.push(book);
        console.log(`L'utente ${this.name} ha ritirato il libro ${book.title}`);
        return;
    }

    toStringUser() {
        const userStr = `Id: ${this.id}
Nome: ${this.name}
Libri in prestito: ${this.borrowedBooksNumber}
Limite: ${this.maxBorrowLimit}`;
        return userStr;
    }
}
// #endregion
// #region library
class Library {
    constructor(books = [], users = []) {
        this.books = books;
        this.users = users;
    }

    addBook(book) {
        if (this.books.some(b => b.isbn === book.isbn)) {
            console.log(`Errore: esiste già un libro con il codice ISBN ${book.isbn}`);
            return;
        }
        this.books.push(book);
        Book.isbnSet.add(book.isbn);
        console.log(`Libro aggiunto: ${book.toStringBook()}`); // Debug message
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index >= 0) {
            this.books.splice(index, 1);
            Book.isbnSet.delete(book.isbn);
            console.log(`Hai rimosso il libro ${book.title} dalla libreria`);
        } else {
            console.log("Non hai trovato il libro, scemo!");
        }
    }

    isBookAvailable(book) {
        if (!this.books.includes(book)) {
            console.log(`Il libro ${book.title} non è presente nella libreria.`);
            return false;
        }
        if (book.flagBorrowed) {
            return false;
        }
        if (book instanceof PhysicalBook && book.shelfLocation === 0) {
            return false;
        }
        if (book instanceof EBook && !EBook.validExtensions.includes(book.fileExtension)) {
            return false;
        }
        return true;
    }

    addUser(user) {
        this.users.push(user);
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    getBookByIsbn(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    removeUser(user) {
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
        let listUsersString = "Elenco degli utenti registrati:\n";
        this.users.forEach((user, index) => {
            listUsersString += `${index + 1}) ${user.toStringUser()}\n`;
        });
        console.log(listUsersString);
    }

    borrowBook(user, book) {
        if (!this.books.includes(book)) {
            console.log(`Il libro ${book.title} non è presente nella libreria e non può essere prestato.`);
            return;
        }
    
        if (!this.isBookAvailable(book)) {
            console.log(`Il libro ${book.title} non è disponibile per il prestito.`);
            return;
        }
    
        user.borrowBook(book); // Prestito del libro all'utente
        book.flagBorrowed = true; // Mark the book as borrowed
    }
    
    returnBook(user, book) {
        const index = user.borrowedBooks.indexOf(book);
        if (index >= 0) {
            user.returnBook(book); // Remove the book from the user's borrowed list
            book.flagBorrowed = false; // Mark the book as available
        } else {
            console.log(`L'utente ${user.name} non ha il libro ${book.title}`);
        }
    }
}
// #endregion

// #region GUI settings
// Initialize the library
const library = new Library();

// Function to update the book list in the UI
function updateBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';  // Clear the current list
    library.books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.toStringBook();
        bookList.appendChild(li);
    });
    console.log("Lista dei libri aggiornata"); // Debug message
}

// Function to update the user list in the UI
function updateUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    library.users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.toStringUser();
        userList.appendChild(li);
    });
    console.log("Lista degli utenti aggiornata"); // Debug message
}

// Function to reset a form
function resetForm(formId) {
    document.getElementById(formId).reset();
}

// Event listener for adding a book
document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const isbn = parseInt(document.getElementById('book-isbn').value);
    const type = document.getElementById('book-type').value;

    try {
        let book;
        if (type === 'physical') {
            const shelfLocation = parseInt(document.getElementById('shelf-location').value);
            book = new PhysicalBook(title, author, isbn, shelfLocation);
        } else if (type === 'ebook') {
            const fileExtension = document.getElementById('file-extension').value;
            book = new EBook(title, author, isbn, fileExtension);
        } else {
            book = new Book(title, author, isbn);
        }
        library.addBook(book);
        updateBookList();  // Ensure this is called after adding the book
        resetForm('add-book-form');  // Reset the form
    } catch (error) {
        alert(error.message);
    }
});

// Event listener for adding a user
document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const type = document.getElementById('user-type').value;

    let user;
    if (type === 'premium') {
        const maxBorrowLimit = parseInt(document.getElementById('max-borrow-limit').value);
        user = new PremiumUser(name);
        user.extendsMaxBorrowLimit(maxBorrowLimit);
    } else {
        user = new User(name);
    }
    library.addUser(user);
    updateUserList();
    resetForm('add-user-form');  // Reset the form
});

// Event listener for modifying the max borrow limit for a premium user
document.getElementById('modify-borrow-limit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('modify-user-id').value);
    const newLimit = parseInt(document.getElementById('new-borrow-limit').value);
    const user = library.getUserById(userId);
    if (user && user instanceof PremiumUser) {
        user.extendsMaxBorrowLimit(newLimit);
        updateUserList();
        resetForm('modify-borrow-limit-form');  // Reset the form
    } else {
        alert('Premium User not found');
    }
});

// Event listener for removing a book
document.getElementById('remove-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const isbn = parseInt(document.getElementById('remove-book-isbn').value);
    const book = library.getBookByIsbn(isbn);
    if (book) {
        library.removeBook(book);
        updateBookList();
        resetForm('remove-book-form');  // Reset the form
    } else {
        alert('Book not found');
    }
});

// Event listener for removing a user
document.getElementById('remove-user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('remove-user-id').value);
    const user = library.getUserById(userId);
    if (user) {
        library.removeUser(user);
        updateUserList();
        resetForm('remove-user-form');  // Reset the form
    } else {
        alert('User not found');
    }
});

// Event listener for borrowing a book
document.getElementById('borrow-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('borrow-user-id').value);
    const bookIsbn = parseInt(document.getElementById('borrow-book-isbn').value);
    const user = library.getUserById(userId);
    const book = library.getBookByIsbn(bookIsbn);
    if (user && book) {
        library.borrowBook(user, book);
        updateBookList();
        updateUserList();
        resetForm('borrow-book-form');  // Reset the form
    } else {
        alert('User or Book not found');
    }
});

// Event listener for returning a book
document.getElementById('return-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('return-user-id').value);
    const bookIsbn = parseInt(document.getElementById('return-book-isbn').value);
    const user = library.getUserById(userId);
    const book = library.getBookByIsbn(bookIsbn);
    if (user && book) {
        library.returnBook(user, book);
        updateBookList();
        updateUserList();
        resetForm('return-book-form');  // Reset the form
    } else {
        alert('User or Book not found');
    }
});

// Event listener for printing all books
document.getElementById('print-books').addEventListener('click', function() {
    library.listBooks();
});

// Event listener for printing all users
document.getElementById('print-users').addEventListener('click', function() {
    library.listUsers();
});

// Show/hide specific properties based on book type
document.getElementById('book-type').addEventListener('change', function(event) {
    const type = event.target.value;
    document.getElementById('physical-book-properties').style.display = type === 'physical' ? 'block' : 'none';
    document.getElementById('ebook-properties').style.display = type === 'ebook' ? 'block' : 'none';
});

// Show/hide specific properties based on user type
document.getElementById('user-type').addEventListener('change', function(event) {
    const type = event.target.value;
    document.getElementById('premium-user-properties').style.display = type === 'premium' ? 'block' : 'none';
});
// #endregion