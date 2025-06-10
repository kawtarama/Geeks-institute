import fs from 'fs';

export function readFileContent() {
  const data = fs.readFileSync('./files/file-data.txt', 'utf-8');
  console.log('📄 Contenu du fichier :');
  console.log(data);
}
