// Importe le module Express
const express = require('express');

// Importe le module Path pour gérer et transformer les chemins de fichiers
const path = require('path');

// Crée une instance de l'application Express
const app = express();

// Définit le dossier des vues (templates) pour l'application
app.set('views', path.join(__dirname, 'views'));

// Définit le moteur de rendu pour les vues comme étant 'ejs'
app.set('view engine', 'ejs');

// Utilise le middleware pour les routes de la page principale
app.use('/', require('./routes/page.routes.js'));

// Utilise le middleware pour les routes de l'API des utilisateurs
app.use('/api/users', require('./routes/users.routes.js'));

// Démarre le serveur et écoute sur le port 3000
app.listen('3000', () => {
    console.log('Server listening on http://localhost:3000');
});











//Type de requettes
//GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD