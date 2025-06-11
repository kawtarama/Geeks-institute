const express = require('express');
const router = express.Router();

// Base de données en mémoire (simple tableau)
let todos = [];
let nextId = 1;

// GET /todos - Obtenir toutes les tâches
router.get('/', (req, res) => {
  res.json(todos);
});

// POST /todos - Ajouter une nouvelle tâche
router.post('/', (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Le champ "title" est requis.' });
  }

  const newTodo = {
    id: nextId++,
    title,
    completed
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Mettre à jour une tâche par ID
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ error: 'Tâche non trouvée.' });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE /todos/:id - Supprimer une tâche par ID
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({ error: 'Tâche non trouvée.' });
  }

  todos.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
