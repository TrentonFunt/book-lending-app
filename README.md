# Book Lending Console App 📚

A simple console-based application for managing book borrowing and returns.

## Features ✨
- **View available books** - See all currently available books
- **Borrow books** - Mark books as unavailable when borrowed
- **Return books** - Mark books as available when returned
- **Input validation** - Handles invalid user inputs gracefully
- **Simple interface** - Number-based menu system
- **Auto-reset** - Returns to default state on reload

## Installation & Setup ⚙️

### Browser Method (Recommended)
1. Open Chrome/Firefox
2. Right-click > **Inspect** > **Console** tab
3. Copy/paste the code into the console
4. Press Enter to start

### Node.js Method
1. Install [Node.js](https://nodejs.org)
2. Install dependencies:
   ```bash
   npm install prompt-sync

3. Run the app:
   ```bash
   node book-lend-app.js

## Usage

### Main Menu

  ```bash
  1. View Available Books
  2. Borrow a Book
  3. Return a Book
  4. Exit
  ```
### Borrowing a Book

1. Select Option 2 from the main menu.

2. Enter the number of the book you want to borrow.

3. The book will become unavailable to others.

### Returning a Book

1. Select Option 3 from the main menu.

2. Enter the number of the book you want to return.

3. The book will become available for borrowing again.

