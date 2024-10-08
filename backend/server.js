const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');
const socket = require('./socket');

// Créer une instance de serveur HTTP et l'attacher à l'application Express
const server = http.createServer(app);
// Attacher Socket.IO au serveur HTTP

// Initialisez Socket.IO
const io = socket.init(server);

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');
  socket.on('disconnect', () => {
      console.log('Utilisateur déconnecté');
  });
});

const globalDataMiddleware = require('./middleware/middleware_livraisons');

// Utiliser le middleware globalDataMiddleware
app.use(globalDataMiddleware);

// Importer les routes
const domaineRoutes = require('./routes/domaineRoute');
const sousDomaineRoute = require("./routes/SousDomaineRoute")
const coursRoute = require("./routes/coursRoute")
const loginRoute = require('./routes/loginCoachRoute');
const registerRoute = require('./routes/registerRoute');
const forgotPasswordRoute = require('./routes/forgotPasswordRoute');
const quizzRoute = require("./routes/quizz_Route")
const projectRoute = require('./routes/projectRoute')
const livraisonRoute = require('./routes/livraisonRoute')
const dashboard = require('./routes/dashboard')
const profilRoute = require('./routes/profilRoute');

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

app.use((req, res, next) => {
  res.locals.pages = req.path; // Définir pages comme le chemin de la requête
  next();
});

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
// Utiliser la route des dashboard
app.use('/dash', dashboard);

// Utiliser la route des domaine
app.use('/domaine', domaineRoutes);

// Utiliser la route des soudDomaine
app.use('/sousDomaine', sousDomaineRoute);

// Utiliser la route des Cours
app.use('/cours', coursRoute);
// Utiliser la route des quizz
app.use('/quizz', quizzRoute);
// Utiliser la route des quizz
app.use('/project', projectRoute);
//la route du profil
app.use('/authentification', profilRoute); 
// Utiliser la route des quizz
app.use('/livraison', livraisonRoute);




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
