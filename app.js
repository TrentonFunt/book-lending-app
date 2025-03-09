// Book Lending Console App

// Book data
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
  { id: 2, title: "1984", author: "George Orwell", available: true },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", available: true },
  { id: 5, title: "Moby Dick", author: "Herman Melville", available: true },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", available: true },
  { id: 7, title: "Brave New World", author: "Aldous Huxley", available: true },
  { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", available: true }
];

// Starter function
function bookLendingApp() {
  while (true) {
    const choice = prompt(
      `Welcome to the Book Lending App!\n
            1. View Available Books
            2. Borrow a Book
            3. Return a Book
            4. Exit
            
            Enter your choice (1-4):`
    );

    switch (choice) {
      case '1':
        displayBooks();
        break;
      case '2':
        borrowBook();
        break;
      case '3':
        returnBook();
        break;
      case '4':
        alert("Thank you for using my Book Lending App!");
        return;
      default:
        alert("Invalid choice. Please enter a number between 1-4.");
    }
  }
}

function displayBooks() {
  // Filter and show only available books
  const availableBooks = books.filter(book => book.available);
  let message = "Available Books:\n\n";

  availableBooks.forEach((book, index) => {
    message += `${index + 1}. ${book.title} by ${book.author}\n`;
  });

  alert(message);
}

