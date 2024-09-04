const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


// Importer les routes
const domaineRoutes = require('./routes/domaineRoute');
const sousDomaineRoute = require("./routes/SousDomaineRoute")
const coursRoute = require("./routes/coursRoute")
const loginRoute = require('./routes/loginCoachRoute');
const registerRoute = require('./routes/registerRoute');
const forgotPasswordRoute = require('./routes/forgotPasswordRoute');


// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
// Middleware pour gérer les requêtes DELETE et PUT dans les formulaires
app.use(methodOverride('_method'));


// Configurer le dossier public pour les fichiers statiques
app.use(express.static('public'));


// Configurer le moteur de templates EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

 // Route principale
app.get('/', (req, res) => {
  res.render('./authentification/register');
});
// app.get('/', (req, res) => {
//   res.render('./authentification/register');
// });
// la route du connexion
app.use('/authentification', loginRoute);

 // la route d'inscription 
app.use('/authentification', registerRoute);

 // la route de mot de passe oublié
app.use('/authentification', forgotPasswordRoute);

// Utiliser la route des domaine
app.use('/domaine', domaineRoutes);

// Utiliser la route des soudDomaine
app.use('/sousDomaine', sousDomaineRoute);

// Utiliser la route des Cours
app.use('/cours', coursRoute);





// Connexion à MongoDB et démarrage du serveur
mongoose
  .connect("mongodb://localhost:27017/E-Learning", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connecté à la base de données MongoDB");
    app.listen(5000, () => {
      console.log("Serveur démarré sur le port 5000");
    });
  })
  .catch((error) => {
    console.log("Erreur lors de la connexion à la base de données :", error);
  });
