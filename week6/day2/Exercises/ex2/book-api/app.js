const express = require('express');
const bookRoutes = require('./server/routes/bookRoutes');

const app = express();
app.use(express.json());

app.use('/api', bookRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
