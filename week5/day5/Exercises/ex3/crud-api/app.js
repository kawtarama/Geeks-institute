// app.js
import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();
const PORT = 5000;
app.use(express.json());

// Route GET /posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("✅ Données récupérées avec succès !");
    res.send(posts);
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des données :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
