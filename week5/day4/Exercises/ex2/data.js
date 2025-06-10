// app.js - Application principale utilisant les modules ES6

// Import du tableau de personnes depuis data.js
import people, { totalPeople, locations } from './data.js';

/**
 * Fonction pour calculer l'âge moyen de toutes les personnes
 * @param {Array} peopleArray - Tableau des personnes
 * @returns {number} - L'âge moyen arrondi à 2 décimales
 */
function calculateAverageAge(peopleArray) {
    if (!peopleArray || peopleArray.length === 0) {
        return 0;
    }
    
    const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
    return Math.round((totalAge / peopleArray.length) * 100) / 100;
}

/**
 * Fonction pour afficher les statistiques des personnes
 */
function displayStatistics() {
    console.log("=== STATISTIQUES DES PERSONNES ===");
    console.log(`Nombre total de personnes: ${totalPeople}`);
    console.log(`Âge moyen: ${calculateAverageAge(people)} ans`);
    console.log(`Villes représentées: ${locations.join(', ')}`);
    console.log("==================================\n");
}

/**
 * Fonction pour afficher toutes les personnes
 */
function displayAllPeople() {
    console.log("=== LISTE DES PERSONNES ===");
    people.forEach((person, index) => {
        console.log(`${index + 1}. ${person.name}, ${person.age} ans, ${person.location}`);
    });
    console.log("===========================\n");
}

/**
 * Fonction pour trouver les personnes par tranche d'âge
 * @param {number} minAge - Âge minimum
 * @param {number} maxAge - Âge maximum
 */
function findPeopleByAgeRange(minAge, maxAge) {
    const filteredPeople = people.filter(person => 
        person.age >= minAge && person.age <= maxAge
    );
    
    console.log(`=== PERSONNES ÂGÉES DE ${minAge} À ${maxAge} ANS ===`);
    if (filteredPeople.length > 0) {
        filteredPeople.forEach(person => {
            console.log(`- ${person.name}, ${person.age} ans, ${person.location}`);
        });
    } else {
        console.log("Aucune personne trouvée dans cette tranche d'âge.");
    }
    console.log("=======================================\n");
}

// Exécution du programme
console.log(" DÉMONSTRATION DES MODULES ES6\n");

// Affichage des statistiques principales
displayStatistics();

// Affichage de toutes les personnes
displayAllPeople();

// Calcul et affichage de l'âge moyen (requis par l'exercice)
const averageAge = calculateAverageAge(people);
console.log(` L'âge moyen de toutes les personnes est: ${averageAge} ans\n`);

// Fonctionnalités bonus
findPeopleByAgeRange(25, 35);
findPeopleByAgeRange(40, 60);