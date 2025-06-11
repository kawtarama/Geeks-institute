// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Importer le routeur des livres
const booksRouter = require('./routes/books');

// Monter le routeur sur /books
app.use('/books', booksRouter);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

