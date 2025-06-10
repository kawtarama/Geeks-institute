// fileManager.js

const fs = require('fs');

// Fonction pour lire un fichier
function readFile(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    console.error(`Erreur de lecture du fichier : ${err.message}`);
    return null;
  }
}

// Fonction pour écrire dans un fichier
function writeFile(path, content) {
  try {
    fs.writeFileSync(path, content, 'utf8');
    console.log(`Le fichier ${path} a été écrit avec succès.`);
  } catch (err) {
    console.error(`Erreur d'écriture dans le fichier : ${err.message}`);
  }
}

// Exporter les fonctions
module.exports = { readFile, writeFile };
