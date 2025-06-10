
// Import du package lodash
const _ = require('lodash');

// Import du module personnalisé math
const math = require('./math.js');

/**
 * Fonction principale pour démontrer les calculs
 */
function main() {
    console.log(' DÉMONSTRATION DU MODULE MATH AVEC LODASH\n');

    // Tests des fonctions de base
    console.log('OPÉRATIONS DE BASE:');
    console.log('='.repeat(40));
    console.log(`Addition: 15 + 25 = ${math.add(15, 25)}`);
    console.log(`Soustraction: 100 - 35 = ${math.subtract(100, 35)}`);
    console.log(`Multiplication: 8 × 7 = ${math.multiply(8, 7)}`);
    console.log(`Division: 144 ÷ 12 = ${math.divide(144, 12)}`);
    console.log(`Puissance: 2^8 = ${math.power(2, 8)}`);
    console.log(`Racine carrée: √64 = ${math.sqrt(64)}`);
    console.log(`Factoriel: 5! = ${math.factorial(5)}`);

    // Utilisation de lodash pour générer des données de test
    console.log('\n GÉNÉRATION DE DONNÉES AVEC LODASH:');
    console.log('='.repeat(45));
    
    // Générer un tableau de nombres aléatoires avec lodash
    const randomNumbers = _.times(10, () => _.random(1, 100));
    console.log(`Nombres générés: [${randomNumbers.join(', ')}]`);

    // Utiliser les fonctions du module math avec les données générées
    console.log(`\n STATISTIQUES:`)
    console.log(`Moyenne: ${math.average(randomNumbers).toFixed(2)}`);
    console.log(`Maximum: ${math.max(randomNumbers)}`);
    console.log(`Minimum: ${math.min(randomNumbers)}`);

    // Utilisation avancée de lodash
    console.log('\n UTILISATION AVANCÉE DE LODASH:');
    console.log('='.repeat(40));

    // Grouper les nombres par parité avec lodash
    const groupedByParity = _.groupBy(randomNumbers, num => num % 2 === 0 ? 'pairs' : 'impairs');
    console.log('Groupés par parité:');
    console.log(`- Nombres pairs: [${(groupedByParity.pairs || []).join(', ')}]`);
    console.log(`- Nombres impairs: [${(groupedByParity.impairs || []).join(', ')}]`);

    // Utiliser lodash pour filtrer et transformer
    const largeNumbers = _.filter(randomNumbers, num => num > 50);
    console.log(`\nNombres > 50: [${largeNumbers.join(', ')}]`);

    if (largeNumbers.length > 0) {
        const squaredLargeNumbers = _.map(largeNumbers, num => math.power(num, 2));
        console.log(`Carrés des grands nombres: [${squaredLargeNumbers.join(', ')}]`);
    }

    // Démonstration de calculs complexes
    console.log('\n CALCULS COMPLEXES:');
    console.log('='.repeat(30));

    // Calculer une série mathématique
    const series = _.range(1, 11); // [1, 2, 3, ..., 10]
    console.log(`Série: [${series.join(', ')}]`);

    // Calculer la somme des carrés
    const sumOfSquares = _.reduce(series, (sum, num) => sum + math.power(num, 2), 0);
    console.log(`Somme des carrés: ${sumOfSquares}`);

    // Calculer la somme des factorielles (pour les petits nombres)
    const smallSeries = _.range(1, 6); // [1, 2, 3, 4, 5]
    const factorials = _.map(smallSeries, num => math.factorial(num));
    console.log(`Factorielles de 1 à 5: [${factorials.join(', ')}]`);
    
    const sumOfFactorials = _.sum(factorials);
    console.log(`Somme des factorielles: ${sumOfFactorials}`);

    // Utilisation de lodash pour créer des structures de données complexes
    console.log('\n STRUCTURES DE DONNÉES COMPLEXES:');
    console.log('='.repeat(45));

    const mathOperations = [
        { operation: 'addition', a: 10, b: 5 },
        { operation: 'multiplication', a: 8, b: 7 },
        { operation: 'division', a: 100, b: 4 },
        { operation: 'power', a: 3, b: 4 }
    ];

    // Utiliser lodash pour traiter les opérations
    const results = _.map(mathOperations, op => {
        let result;
        switch (op.operation) {
            case 'addition':
                result = math.add(op.a, op.b);
                break;
            case 'multiplication':
                result = math.multiply(op.a, op.b);
                break;
            case 'division':
                result = math.divide(op.a, op.b);
                break;
            case 'power':
                result = math.power(op.a, op.b);
                break;
            default:
                result = 'Opération inconnue';
        }
        return { ...op, result };
    });

    console.log('Résultats des opérations:');
    _.forEach(results, op => {
        console.log(`${op.operation}: ${op.a} et ${op.b} = ${op.result}`);
    });

    // Statistiques avec lodash
    console.log('\n STATISTIQUES FINALES:');
    console.log('='.repeat(35));
    
    const allResults = _.map(results, 'result').filter(r => typeof r === 'number');
    console.log(`Tous les résultats: [${allResults.join(', ')}]`);
    console.log(`Moyenne des résultats: ${math.average(allResults).toFixed(2)}`);
    console.log(`Médiane avec lodash: ${_.mean(allResults).toFixed(2)}`);

    // Démonstration de gestion d'erreurs
    console.log('\n GESTION D\'ERREURS:');
    console.log('='.repeat(25));
    
    try {
        math.divide(10, 0);
    } catch (error) {
        console.log(`Erreur de division: ${error.message}`);
    }

    try {
        math.factorial(-5);
    } catch (error) {
        console.log(`Erreur de factoriel: ${error.message}`);
    }

    console.log('\n Démonstration terminée avec succès !');
    console.log('Le module math personnalisé et lodash fonctionnent parfaitement ensemble.');
}

/**
 * Fonction pour afficher les informations du projet
 */
function displayProjectInfo() {
    console.log(' INFORMATIONS DU PROJET:');
    console.log('- Module personnalisé: math.js');
    console.log('- Package externe: lodash');
    console.log('- Type de module: CommonJS');
    console.log('- Commande d\'installation: npm install lodash\n');
}

// Exécution du programme
displayProjectInfo();
main();