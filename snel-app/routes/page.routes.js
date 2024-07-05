// Importe le module Express
const express = require('express');

// Crée un routeur Express
const router = express.Router();

// Définition d'une route GET pour la racine ('/')
router.get('/', (req, res) => {
    // Création d'un tableau de produits
    const products = [
        {name: "John", description: "John"},
        {name: "John", description: "John"},
        {name: "John", description: "John"}
    ];

    // Rend la vue 'index' et passe les données des produits et le titre à la vue
    res.render('index', {
        title: 'Welcome to SNEL App',
        products
    });
});

// Exporte le routeur pour pouvoir l'utiliser dans d'autres fichiers
module.exports = router;