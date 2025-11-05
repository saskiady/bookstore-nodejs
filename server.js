const express = require('express');
const app = express();
const books = {
  "9780143127550": { title: "To Kill a Mockingbird", author: "Harper Lee", reviews: {} },
  "9780439023528": { title: "The Hunger Games", author: "Suzanne Collins", reviews: {} }
};

app.use(express.json());

// Task 1: Get all books
app.get('/books', (req, res) => {
  res.send(books);
});

// Task 2: Get book by ISBN
app.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  res.send(book || "Book not found");
});

// Task 3: Get all books by author
app.get('/author/:author', (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.send(result);
});

// Task 4: Get all books by title
app.get('/title/:title', (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.send(result);
});

// Task 5: Get book reviews
app.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  res.send(book ? book.reviews : "Book not found");
});

// Task 6: Register user
const users = {};
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users[username] = { password };
  res.send("User registered successfully");
});

// Task 7: Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username].password === password) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

