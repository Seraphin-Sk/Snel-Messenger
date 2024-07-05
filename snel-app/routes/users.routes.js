// Importe le module Express
const express = require('express');

// Crée un routeur Express
const router = express.Router();

// Définition d'une route GET pour la racine ('/')
router.get('/', (req, res) => {
    // Envoie une réponse JSON contenant un tableau d'objets
    res.send([
        {
            id: 20,
            name: "Seraphin",
            pstnom: 'siriyake'
        },
        {
            id: 20,
            name: "Seraphin",
            pstnom: 'siriyake'
        }
    ]);
});

// Exporte le routeur pour pouvoir l'utiliser dans d'autres fichiers
module.exports = router;
