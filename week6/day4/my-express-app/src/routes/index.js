// const express = require('express');
// const IndexController = require('../controllers/index');

// function setRoutes(app) {
//     const indexController = new IndexController();

//     app.get('/', indexController.getIndex.bind(indexController));
// }

// module.exports = setRoutes;

// const express = require('express');
// const router = express.Router();

// router.get('/products', (req, res) => {
//   res.json([
//     { id: 1, name: 'Produit 1', price: 10 },
//     { id: 2, name: 'Produit 2', price: 20 }
//   ]);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Produit 1', price: 10 },
  { id: 2, name: 'Produit 2', price: 20 }
];

// Route accueil
router.get('/', (req, res) => {
  res.render('index');
});

// Route produits
router.get('/products', (req, res) => {
  res.render('products', { products });
});

module.exports = router;