const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Importer le routeur de todos
const todosRouter = require('./routes/todos');

// Monter le routeur sur /todos
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
