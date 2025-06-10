// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simuler une base de données
let posts = [
  { id: 1, title: 'Premier article', content: 'Contenu du premier article' },
  { id: 2, title: 'Deuxième article', content: 'Contenu du deuxième article' }
];

// GET /posts - Liste de tous les articles
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - Obtenir un article par ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Article non trouvé' });
  res.json(post);
});

// POST /posts - Créer un nouvel article
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - Mettre à jour un article
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Article non trouvé' });

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  res.json(post);
});

// DELETE /posts/:id - Supprimer un article
app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Article non trouvé' });

  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost[0]);
});

// Gestion des routes non valides
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
