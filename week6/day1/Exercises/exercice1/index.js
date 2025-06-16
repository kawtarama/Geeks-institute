// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil!');
});

router.get('/about', (req, res) => {
  res.send('Page À propos de nous');
});

module.exports = router;
