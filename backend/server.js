const express = require('express');
const mongoose = require('mongoose');
const { sendEmail } = require('./Service/emailService');
const cors = require('cors'); // Importer cors
const app = express();
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');
const socket = require('./socket');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');


app.use(cookieParser());
// Créer une instance de serveur HTTP et l'attacher à l'application Express
const server = http.createServer(app);
// Attacher Socket.IO au serveur HTTP
const io = socket.init(server);

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');
  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

const { requireAuth } = require('./middleware/middleware_coach');
const globalDataMiddleware = require('./middleware/middleware_livraisons');

// Utiliser le middleware CORS
app.use(cors({
  origin: 'http://localhost:3000', // Remplace par l'origine de ton frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Authorization,Content-Type',
}));

// Utiliser le middleware globalDataMiddleware
app.use(globalDataMiddleware);



// Importer les routes
const authMiddleware = require('./middleware/authMiddleware');
const domaineRoutes = require('./routes/domaineRoute');
const sousDomaineRoute = require("./routes/SousDomaineRoute");
const coursRoute = require("./routes/coursRoute");
const loginRoute = require('./routes/loginCoachRoute');
const registerRoute = require('./routes/registerRoute');
const forgotPasswordRoute = require('./routes/forgotPasswordRoute');
const quizzRoute = require("./routes/quizz_Route");
const projectRoute = require('./routes/projectRoute');
const livraisonRoute = require('./routes/livraisonRoute');
const dashboard = require('./routes/dashboard');
const profilRoute= require('./routes/profilRoute')
const apprenantRoute = require('./routes/apprenantRoute');

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

// Routes d'authentification
app.use('/authentification', loginRoute);
app.use('/authentification', registerRoute);
app.use('/authentification', forgotPasswordRoute);
app.use('/authentification', profilRoute);

// Routes protégées
app.use('/dash', dashboard);

// Autres routes
app.use('/domaine', domaineRoutes);
app.use('/sousDomaine', sousDomaineRoute);
app.use('/cours', coursRoute);
app.use('/quizz', quizzRoute);
app.use('/project', projectRoute);

// Utiliser la route des livraisons
app.use('/livraison', livraisonRoute);

// Monter les routes API sous /api
app.use('/api/profil', authMiddleware.verifyToken, profilRoute);

// Ajouter une route de vue pour le profil
app.get('/profile', (req, res) => {
  res.render('authentification/profil'); // Rendre la vue 'profil.ejs'
});

// Création du dossier 'uploads' s'il n'existe pas
const uploadDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuration de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Dossier de destination des fichiers uploadés
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Nom unique pour éviter les conflits
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de taille : 5MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Le format du fichier est invalide. Seuls les fichiers JPG, JPEG et PNG sont acceptés.'));
    }
  }
});

// Route pour télécharger une image de profil
app.post('/upload-profile-picture', upload.single('profilePicture'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Aucun fichier sélectionné.' });
  }
  res.json({ message: 'Image téléchargée avec succès', filePath: `/uploads/${req.file.filename}` });
});

// Gestion des erreurs liées à multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Gérer les erreurs de multer
    return res.status(400).json({ message: `Erreur Multer: ${err.message}` });
  } else if (err) {
    // Gérer les autres erreurs
    return res.status(400).json({ message: err.message });
  }
  next();
});




app.use('/apprenant', apprenantRoute);

// Connexion à MongoDB et démarrage du serveur
mongoose
  .connect("mongodb://localhost:27017/E-Learning")
  .then(() => {
    console.log("Connecté à la base de données MongoDB");
    server.listen(5000, () => {
      console.log("Serveur démarré sur le port 5000");
    });
  })
  .catch((error) => {
    console.log("Erreur lors de la connexion à la base de données :", error);
  });
