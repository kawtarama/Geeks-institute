const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // autoriser les requêtes cross-origin
app.use(express.json()); // parser les données JSON

const PORT = 5000;

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  console.log('POST body:', req.body);
  const { message } = req.body;
  res.send(`J'ai bien reçu votre requête POST. Voici ce que vous m'avez envoyé : ${message}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
