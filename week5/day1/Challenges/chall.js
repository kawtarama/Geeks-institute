function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === "string")) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Tous les éléments ne sont pas des chaînes !");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Le tableau contient 4 mots ou moins !");
    }
  });
}

// Test 1: contient un nombre -> rejeté
makeAllCaps([1, "pear", "banana"])
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log("Erreur :", error));

// Test 2: tableau de 3 mots seulement -> rejeté
makeAllCaps(["apple", "pear", "banana"])
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log("Erreur :", error));

// Test 3: succès
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(sortWords)
  .then(result => console.log(result)) 
  .catch(error => console.log("Erreur :", error));



  const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.", "a": ".-", "b": "-...",
  "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---",
  "k": "-.-", "l": ".-..", "m": "--", "n": "-.",
  "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-",
  "w": ".--", "x": "-..-", "y": "-.--", "z": "--..",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
  "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
  ")": "-.--.-"
}`;

// Fonction 1 : convertir la chaîne JSON en objet JS
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      reject("Le dictionnaire morse est vide !");
    } else {
      resolve(morseJS);
    }
  });
}

// Fonction 2 : demander un mot et traduire en morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Entrez un mot ou une phrase à traduire en Morse :").toLowerCase();
    const morseArray = [];

    for (let char of userInput) {
      if (morseJS[char]) {
        morseArray.push(morseJS[char]);
      } else {
        reject(`Le caractère "${char}" n'existe pas dans le dictionnaire Morse.`);
        return;
      }
    }

    resolve(morseArray);
  });
}

// Fonction 3 : afficher la traduction sur la page
function joinWords(morseTranslation) {
  const result = morseTranslation.join("\n");
  const div = document.createElement("div");
  div.innerText = result;
  document.body.appendChild(div);
}

// Chaînage
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(translation => joinWords(translation))
  .catch(error => console.log("Erreur :", error));
