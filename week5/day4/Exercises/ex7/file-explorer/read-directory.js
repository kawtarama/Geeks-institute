// read-directory.js
const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    return console.error('Erreur lors de la lecture du répertoire :', err);
  }

  console.log('📁 Fichiers présents dans le dossier :');
  files.forEach(file => {
    console.log('- ' + file);
  });
});
