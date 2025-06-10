// shop.js - Fichier principal pour rechercher et afficher les produits

// Import du tableau de produits depuis products.js
const products = require('./products.js');

/**
 * Fonction pour rechercher un produit par son nom
 * @param {string} productName - Le nom du produit à rechercher
 * @returns {object|null} - L'objet produit trouvé ou null si non trouvé
 */
function findProductByName(productName) {
    return products.find(product => 
        product.name.toLowerCase() === productName.toLowerCase()
    );
}

/**
 * Fonction pour afficher les détails d'un produit
 * @param {object} product - L'objet produit à afficher
 */
function displayProductDetails(product) {
    if (product) {
        console.log("=== Détails du produit ===");
        console.log(`Nom: ${product.name}`);
        console.log(`Prix: ${product.price}€`);
        console.log(`Catégorie: ${product.category}`);
        console.log("========================\n");
    } else {
        console.log("Produit non trouvé\n");
    }
}

/**
 * Fonction pour rechercher et afficher un produit
 * @param {string} productName - Le nom du produit à rechercher
 */
function searchAndDisplayProduct(productName) {
    console.log(`Recherche du produit: "${productName}"`);
    const product = findProductByName(productName);
    displayProductDetails(product);
}

// Tests avec différents noms de produits
console.log("=== BOUTIQUE EN LIGNE ===\n");

// Test 1: Produit existant
searchAndDisplayProduct("Ordinateur portable");

// Test 2: Produit existant avec casse différente
searchAndDisplayProduct("smartphone");

// Test 3: Produit existant
searchAndDisplayProduct("Chaise de bureau");

// Test 4: Produit non existant
searchAndDisplayProduct("Tablette");

// Test 5: Produit existant
searchAndDisplayProduct("Casque audio");

// Fonction bonus: afficher tous les produits disponibles
function displayAllProducts() {
    console.log("=== TOUS LES PRODUITS DISPONIBLES ===");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - ${product.price}€ (${product.category})`);
    });
    console.log("====================================\n");
}

// Affichage de tous les produits
displayAllProducts();