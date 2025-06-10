// app.js

const { readFile, writeFile } = require('./fileManager');

// Lire le contenu de "Hello World.txt"
const helloContent = readFile('Hello World.txt');
console.log("Contenu du fichier lu :", helloContent);

// Écrire du nouveau contenu dans "Bye World.txt"
writeFile('Bye World.txt', 'Écriture dans le fichier');
