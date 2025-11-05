// client.js
// Tasks 10–13: Using Axios with Async/Await and Promises

const axios = require('axios');

// Task 10: Get all books – Using async/await
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:5000/books');
    console.log('All Books:', response.data);
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
      console.log(`Book with ISBN ${isbn}:`, response.data);
    })
    .catch(error => {
      console.error('Error fetching book by ISBN:', error.message);
    });
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log(`Books by ${author}:`, response.data);
  } catch (error) {
    console.error('Error fetching by author:', error.message);
  }
}

// Task 13: Search by Title – Using async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log(`Books with title "${title}":`, response.data);
  } catch (error) {
    console.error('Error fetching by title:', error.message);
  }
}

// Uncomment the functions below to test individually:

// getAllBooks();
// getBookByISBN('9780143127550');
// getBooksByAuthor('Harper Lee');
// getBooksByTitle('To Kill a Mockingbird');
