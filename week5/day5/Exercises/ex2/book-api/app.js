// app.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware pour lire le JSON

// Base de données simulée
let books = [
  { id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', publishedYear: 1943 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'L\'Étranger', author: 'Albert Camus', publishedYear: 1942 }
];

// Route GET /api/books - Lire tous les livres
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// Route GET /api/books/:bookId - Lire un livre spécifique
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Livre introuvable' });
  }
  res.status(200).json(book);
});

// Route POST /api/books - Créer un nouveau livre
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
