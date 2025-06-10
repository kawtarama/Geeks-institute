

/**
 * Fonction d'addition
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} - Somme de a et b
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return a + b;
}

/**
 * Fonction de multiplication
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} - Produit de a et b
 */
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return a * b;
}

/**
 * Fonction de soustraction
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} - Différence de a et b
 */
function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return a - b;
}

/**
 * Fonction de division
 * @param {number} a - Dividende
 * @param {number} b - Diviseur
 * @returns {number} - Quotient de a et b
 */
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    if (b === 0) {
        throw new Error('Division par zéro impossible');
    }
    return a / b;
}

/**
 * Fonction pour calculer la puissance
 * @param {number} base - Base
 * @param {number} exponent - Exposant
 * @returns {number} - Base élevée à la puissance exposant
 */
function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return Math.pow(base, exponent);
}

/**
 * Fonction pour calculer la racine carrée
 * @param {number} n - Nombre
 * @returns {number} - Racine carrée de n
 */
function sqrt(n) {
    if (typeof n !== 'number') {
        throw new Error('Le paramètre doit être un nombre');
    }
    if (n < 0) {
        throw new Error('Impossible de calculer la racine carrée d\'un nombre négatif');
    }
    return Math.sqrt(n);
}

/**
 * Fonction pour calculer le factoriel
 * @param {number} n - Nombre entier positif
 * @returns {number} - Factoriel de n
 */
function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error('Le paramètre doit être un nombre entier');
    }
    if (n < 0) {
        throw new Error('Le factoriel n\'est pas défini pour les nombres négatifs');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Fonction pour calculer la moyenne d'un tableau de nombres
 * @param {Array} numbers - Tableau de nombres
 * @returns {number} - Moyenne des nombres
 */
function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Le paramètre doit être un tableau non vide');
    }
    if (!numbers.every(n => typeof n === 'number')) {
        throw new Error('Tous les éléments du tableau doivent être des nombres');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

/**
 * Fonction pour trouver le maximum d'un tableau
 * @param {Array} numbers - Tableau de nombres
 * @returns {number} - Nombre maximum
 */
function max(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Le paramètre doit être un tableau non vide');
    }
    if (!numbers.every(n => typeof n === 'number')) {
        throw new Error('Tous les éléments du tableau doivent être des nombres');
    }
    return Math.max(...numbers);
}

/**
 * Fonction pour trouver le minimum d'un tableau
 * @param {Array} numbers - Tableau de nombres
 * @returns {number} - Nombre minimum
 */
function min(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Le paramètre doit être un tableau non vide');
    }
    if (!numbers.every(n => typeof n === 'number')) {
        throw new Error('Tous les éléments du tableau doivent être des nombres');
    }
    return Math.min(...numbers);
}

// Export des fonctions avec CommonJS
module.exports = {
    add,
    multiply,
    subtract,
    divide,
    power,
    sqrt,
    factorial,
    average,
    max,
    min
};