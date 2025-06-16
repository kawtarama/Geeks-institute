// routes/books.js
const express = require('express');
const router = express.Router();

// Base de données en mémoire pour stocker les livres
let books = [];
let nextId = 1;

// GET /books - Obtenir tous les livres
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books - Ajouter un nouveau livre
router.post('/', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Les champs "title" et "author" sont requis.' });
  }

  const newBook = {
    id: nextId++,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - Mettre à jour un livre par ID
router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Livre non trouvé.' });
  }

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;

  res.json(book);
});

// DELETE /books/:id - Supprimer un livre par ID
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: 'Livre non trouvé.' });
  }

  books.splice(index, 1);
  res.status(204).send(); // Pas de contenu
});

module.exports = router;
